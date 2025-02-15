// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7; //Do not change the solidity version as it negativly impacts submission grading

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

error RandomIpfsNft__NeedMoreETHSend();
error RandomIpfsNft__RangeOutOfBounds();
error RandomIpfsNft__TransferFailed();

contract RandomIpfsNft is VRFConsumerBaseV2, ERC721URIStorage {
	VRFCoordinatorV2Interface private immutable i_vrfCoordinator;
	uint64 private immutable i_subscriptionId;
	bytes32 private immutable i_gasLane;
	uint32 private immutable i_callbackGasLimit;
	uint16 private constant REQUEST_CONFRIMATIONS = 3;
	uint32 private constant NUM_WORDS = 1;

	// VRF helpers
	mapping(uint256 => address) s_requestIdToSender;

	// NFT variables
	uint256 s_tokenCounter;
	uint256 internal constant MAX_CHANCE_VALUE = 60;
	string[] internal s_dogTokenUris;
	uint256 internal i_mintFee;

	// Events
	event NftRequested(uint256 indexed requestId, address requester);
	event NftMinted(Breed, address);

	// Type declaration
	enum Breed {
		PUB,
		SHIBA_INU,
		ST_BERNARD
	}

	constructor(
		address vrfCoordinatorV2,
		uint64 subscriptionId,
		bytes32 gasLane,
		uint32 callbackGasLimit,
		string[3] memory dogTokenUris,
		uint256 mintFee
	) VRFConsumerBaseV2(vrfCoordinatorV2) ERC721("Random IPFS NFT", "NFT") {
		i_vrfCoordinator = VRFCoordinatorV2Interface(vrfCoordinatorV2);
		i_subscriptionId = subscriptionId;
		i_gasLane = gasLane;
		i_callbackGasLimit = callbackGasLimit;
		s_dogTokenUris = dogTokenUris;
		i_mintFee = mintFee;
	}

	function requestNft() public payable returns (uint256 requestId) {
		if (msg.value < i_mintFee) {
			revert RandomIpfsNft__NeedMoreETHSend();
		}
		requestId = i_vrfCoordinator.requestRandomWords(
			i_gasLane,
			i_subscriptionId,
			REQUEST_CONFRIMATIONS,
			i_callbackGasLimit,
			NUM_WORDS
		);
		s_requestIdToSender[requestId] = msg.sender;
		emit NftRequested(requestId, msg.sender);
	}

	function fulfillRandomWords(
		uint256 requestId,
		uint256[] memory randomWords
	) internal override {
		address dogOwner = s_requestIdToSender[requestId];
		uint256 newTokenId = s_tokenCounter;

		// what does this token look like?
		uint256 moddedRng = randomWords[0] % MAX_CHANCE_VALUE;
		Breed dogBreed = getBreedFromModdedRng(moddedRng);
		_safeMint(dogOwner, newTokenId);
		_setTokenURI(newTokenId, s_dogTokenUris[uint256(dogBreed)]);
		emit NftMinted(dogBreed, dogOwner);
	}

	// todo add onlyOwner
	function withdraw() public {
		uint256 amount = address(this).balance;
		(bool success, ) = payable(msg.sender).call{ value: amount }("");
		if (!success) revert RandomIpfsNft__TransferFailed();
	}

	function getBreedFromModdedRng(
		uint256 moddedRng
	) public pure returns (Breed) {
		uint256 cumulativeSum = 0;
		uint256[3] memory chanceArray = getChannceArray();
		for (uint256 i = 0; i < chanceArray.length; i++) {
			if (
				moddedRng >= cumulativeSum &&
				moddedRng < cumulativeSum + chanceArray[i]
			) {
				return Breed(i);
			}
			cumulativeSum += chanceArray[i];
		}
		revert RandomIpfsNft__RangeOutOfBounds();
	}

	function getChannceArray() public pure returns (uint256[3] memory) {
		return [10, 30, MAX_CHANCE_VALUE];
	}

	function getMintFee() public view returns (uint256) {
		return i_mintFee;
	}

	function getDogTokenUris() public view returns (string[] memory) {
		return s_dogTokenUris;
	}

	function tokenURI(
		uint256 tokenId
	) public view virtual override returns (string memory) {}
}
