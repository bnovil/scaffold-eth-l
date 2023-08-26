// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

contract BlindAuction {
	struct Bid {
		bytes32 blindedBid;
		uint deposit;
	}

	address payable public beneficeary;
	uint public biddingEnd;
	uint public revealEnd;
	bool public ended;

	mapping(address => Bid[]) public bids;

	address public hightestBidder;
	uint public highestBid;

	mapping(address => uint) pendingReturns;

	event AuctionEnded(address winner, uint highestBid);

	error TooEarly(uint time);
	error TooLate(uint time);
	error AuctionEndAlreadyCalled();

	modifier onlyBefore(uint time) {
		if (block.timestamp >= time) revert TooLate(time);
		_;
	}
	modifier onlyAfter(uint time) {
		if (block.timestamp <= time) revert TooEarly(time);
		_;
	}

	constructor(
		uint biddingTime,
		uint revealTime,
		address payable beneficiaryAddress
	) {
		beneficeary = beneficiaryAddress;
		biddingEnd = block.timestamp + biddingTime;
		revealEnd = biddingEnd + revealTime;
	}

	function bid(bytes32 blindBid) external payable {
		bids[msg.sender].push(
			Bid({ blindedBid: blindBid, deposit: msg.value })
		);
	}

	function reveal(
		uint[] calldata values,
		bool[] calldata fakes,
		bytes32[] calldata secrets
	) external onlyAfter(biddingEnd) onlyBefore(revealEnd) {
		uint length = bids[msg.sender].length;

		require(values.length == length);

		uint refund;
		for (uint i = 0; i < length; i++) {
			Bid memory bidToCheck = bids[msg.sender][i];
			(uint value, bool fake, bytes32 secret) = (
				values[i],
				fakes[i],
				secrets[i]
			);

			if (
				bidToCheck.blindedBid !=
				keccak256(abi.encodePacked(value, fake, secret))
			) {
				continue;
			}
			refund += bidToCheck.deposit;
			if (!fake && bidToCheck.deposit >= value) {
				if (placeBid(msg.sender, value)) {
					refund -= value;
				}
			}
			bidToCheck.blindedBid = bytes32(0);
		}
		payable(msg.sender).transfer(refund);
	}

	function withdraw() external {
		uint amount = pendingReturns[msg.sender];
		if (amount > 0) {
			pendingReturns[msg.sender] = 0;
			payable(msg.sender).transfer(amount);
		}
	}

	function auctionEnd() external onlyAfter(revealEnd) {
		if (ended) revert AuctionEndAlreadyCalled();
		emit AuctionEnded(hightestBidder, highestBid);
		ended = true;
		beneficeary.transfer(highestBid);
	}

	function placeBid(
		address bidder,
		uint value
	) internal returns (bool success) {
		if (value <= highestBid) {
			return false;
		}
		if (hightestBidder != address(0)) {
			pendingReturns[hightestBidder] += highestBid;
		}
		highestBid = value;
		hightestBidder = bidder;
		return true;
	}
}
// 100 false 0x4f50455241544f525f524f4c4500000000000000000000000000000000000000
// 0x3c76bd9a00d2ff2e643fd009e2048010ef57a992dd1f225e790f35ca4e8ff55a
