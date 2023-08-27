// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

contract Purchase {
	uint public value;
	address payable public seller;
	address payable public buyer;

	enum State {
		Created,
		Locked,
		Release,
		Inactive
	}

	State public state;

	modifier condition(bool condition_) {
		require(condition_);
		_;
	}

	error OnlyBuyer();
	error OnlySeller();
	error InvalidState();

	modifier onlyBuyer() {
		if (msg.sender != buyer) {
			revert OnlyBuyer();
		}
		_;
	}

	modifier onlySeller() {
		if (msg.sender != seller) {
			revert OnlySeller();
		}
		_;
	}

	modifier inState(State state_) {
		if (state != state_) {
			revert InvalidState();
		}
		_;
	}

	event Aborted();
	event PurchaseConfirmed();
	event ItemReceived();
	event SellerRefund();

	constructor() payable {
		console.log("constructor, msg.value:%d", msg.value);
		seller = payable(msg.sender);
		value = msg.value;
	}

	function abort() external inState(State.Created) {
		// function abort() external onlySeller inState(State.Created) {
		emit Aborted();
		state = State.Inactive;
		seller.transfer(address(this).balance);
	}

	function confirmPurchase()
		external
		payable
		inState(State.Created)
	{
		emit PurchaseConfirmed();
		buyer = payable(msg.sender);
		state = State.Locked;
	}

	function confirmReceived() external inState(State.Locked) onlyBuyer {
		emit ItemReceived();
		state = State.Release;
		seller.transfer(value);
	}

	function refundSeller() external inState(State.Release) {
		// function refundSeller() external onlySeller inState(State.Release) {
		emit SellerRefund();
		state = State.Inactive;
		seller.transfer(value);
	}
}
