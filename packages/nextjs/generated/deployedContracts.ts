const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        BasicNFT: {
          address: "0x0B306BF915C4d645ff596e518fAf3F9669b97016",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "TOKEN_URI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getTokenCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "mintNFT",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        BlindAuction: {
          address: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "biddingTime",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "revealTime",
                  type: "uint256",
                },
                {
                  internalType: "address payable",
                  name: "beneficiaryAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "AuctionEndAlreadyCalled",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "time",
                  type: "uint256",
                },
              ],
              name: "TooEarly",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "time",
                  type: "uint256",
                },
              ],
              name: "TooLate",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "winner",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "highestBid",
                  type: "uint256",
                },
              ],
              name: "AuctionEnded",
              type: "event",
            },
            {
              inputs: [],
              name: "auctionEnd",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "beneficeary",
              outputs: [
                {
                  internalType: "address payable",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "blindBid",
                  type: "bytes32",
                },
              ],
              name: "bid",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "biddingEnd",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "bids",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "blindedBid",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "deposit",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "ended",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "highestBid",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "hightestBidder",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256[]",
                  name: "values",
                  type: "uint256[]",
                },
                {
                  internalType: "bool[]",
                  name: "fakes",
                  type: "bool[]",
                },
                {
                  internalType: "bytes32[]",
                  name: "secrets",
                  type: "bytes32[]",
                },
              ],
              name: "reveal",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "revealEnd",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        MockV3Aggregator: {
          address: "0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "int256",
                  name: "_initialAnswer",
                  type: "int256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "int256",
                  name: "current",
                  type: "int256",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
              ],
              name: "AnswerUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "roundId",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "startedBy",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
              ],
              name: "NewRound",
              type: "event",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "description",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
              ],
              name: "getRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "getTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestAnswer",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRound",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestRoundData",
              outputs: [
                {
                  internalType: "uint80",
                  name: "roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "startedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "updatedAt",
                  type: "uint256",
                },
                {
                  internalType: "uint80",
                  name: "answeredInRound",
                  type: "uint80",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "latestTimestamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
              ],
              name: "updateAnswer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint80",
                  name: "_roundId",
                  type: "uint80",
                },
                {
                  internalType: "int256",
                  name: "_answer",
                  type: "int256",
                },
                {
                  internalType: "uint256",
                  name: "_timestamp",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_startedAt",
                  type: "uint256",
                },
              ],
              name: "updateRoundData",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Purchase: {
          address: "0x9A676e781A523b5d0C0e43731313A708CB607508",
          abi: [
            {
              inputs: [],
              stateMutability: "payable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "InvalidState",
              type: "error",
            },
            {
              inputs: [],
              name: "OnlyBuyer",
              type: "error",
            },
            {
              inputs: [],
              name: "OnlySeller",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [],
              name: "Aborted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [],
              name: "ItemReceived",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [],
              name: "PurchaseConfirmed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [],
              name: "SellerRefund",
              type: "event",
            },
            {
              inputs: [],
              name: "abort",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "buyer",
              outputs: [
                {
                  internalType: "address payable",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "confirmPurchase",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "confirmReceived",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "refundSeller",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "seller",
              outputs: [
                {
                  internalType: "address payable",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "state",
              outputs: [
                {
                  internalType: "enum Purchase.State",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "value",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        RandomIpfsNft: {
          address: "0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "vrfCoordinatorV2",
                  type: "address",
                },
                {
                  internalType: "uint64",
                  name: "subscriptionId",
                  type: "uint64",
                },
                {
                  internalType: "bytes32",
                  name: "gasLane",
                  type: "bytes32",
                },
                {
                  internalType: "uint32",
                  name: "callbackGasLimit",
                  type: "uint32",
                },
                {
                  internalType: "string[3]",
                  name: "dogTokenUris",
                  type: "string[3]",
                },
                {
                  internalType: "uint256",
                  name: "mintFee",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "have",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "want",
                  type: "address",
                },
              ],
              name: "OnlyCoordinatorCanFulfill",
              type: "error",
            },
            {
              inputs: [],
              name: "RandomIpfsNft__NeedMoreETHSend",
              type: "error",
            },
            {
              inputs: [],
              name: "RandomIpfsNft__RangeOutOfBounds",
              type: "error",
            },
            {
              inputs: [],
              name: "RandomIpfsNft__TransferFailed",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "approved",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "ApprovalForAll",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_fromTokenId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_toTokenId",
                  type: "uint256",
                },
              ],
              name: "BatchMetadataUpdate",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_tokenId",
                  type: "uint256",
                },
              ],
              name: "MetadataUpdate",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "enum RandomIpfsNft.Breed",
                  name: "",
                  type: "uint8",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "NftMinted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "requestId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "requester",
                  type: "address",
                },
              ],
              name: "NftRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "getApproved",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "moddedRng",
                  type: "uint256",
                },
              ],
              name: "getBreedFromModdedRng",
              outputs: [
                {
                  internalType: "enum RandomIpfsNft.Breed",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [],
              name: "getChannceArray",
              outputs: [
                {
                  internalType: "uint256[3]",
                  name: "",
                  type: "uint256[3]",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [],
              name: "getDogTokenUris",
              outputs: [
                {
                  internalType: "string[]",
                  name: "",
                  type: "string[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getMintFee",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "isApprovedForAll",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "ownerOf",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "requestId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "randomWords",
                  type: "uint256[]",
                },
              ],
              name: "rawFulfillRandomWords",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "requestNft",
              outputs: [
                {
                  internalType: "uint256",
                  name: "requestId",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "safeTransferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              name: "setApprovalForAll",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "tokenURI",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "tokenId",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        VRFCoordinatorV2Mock: {
          address: "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1",
          abi: [
            {
              inputs: [
                {
                  internalType: "uint96",
                  name: "_baseFee",
                  type: "uint96",
                },
                {
                  internalType: "uint96",
                  name: "_gasPriceLink",
                  type: "uint96",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "InsufficientBalance",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidConsumer",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidRandomWords",
              type: "error",
            },
            {
              inputs: [],
              name: "InvalidSubscription",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "MustBeSubOwner",
              type: "error",
            },
            {
              inputs: [],
              name: "TooManyConsumers",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint64",
                  name: "subId",
                  type: "uint64",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "consumer",
                  type: "address",
                },
              ],
              name: "ConsumerAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint64",
                  name: "subId",
                  type: "uint64",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "consumer",
                  type: "address",
                },
              ],
              name: "ConsumerRemoved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "requestId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "outputSeed",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint96",
                  name: "payment",
                  type: "uint96",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "success",
                  type: "bool",
                },
              ],
              name: "RandomWordsFulfilled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "keyHash",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "requestId",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "preSeed",
                  type: "uint256",
                },
                {
                  indexed: true,
                  internalType: "uint64",
                  name: "subId",
                  type: "uint64",
                },
                {
                  indexed: false,
                  internalType: "uint16",
                  name: "minimumRequestConfirmations",
                  type: "uint16",
                },
                {
                  indexed: false,
                  internalType: "uint32",
                  name: "callbackGasLimit",
                  type: "uint32",
                },
                {
                  indexed: false,
                  internalType: "uint32",
                  name: "numWords",
                  type: "uint32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "RandomWordsRequested",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint64",
                  name: "subId",
                  type: "uint64",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "SubscriptionCanceled",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint64",
                  name: "subId",
                  type: "uint64",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              name: "SubscriptionCreated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint64",
                  name: "subId",
                  type: "uint64",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "oldBalance",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "newBalance",
                  type: "uint256",
                },
              ],
              name: "SubscriptionFunded",
              type: "event",
            },
            {
              inputs: [],
              name: "BASE_FEE",
              outputs: [
                {
                  internalType: "uint96",
                  name: "",
                  type: "uint96",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "GAS_PRICE_LINK",
              outputs: [
                {
                  internalType: "uint96",
                  name: "",
                  type: "uint96",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "MAX_CONSUMERS",
              outputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
              ],
              name: "acceptSubscriptionOwnerTransfer",
              outputs: [],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
                {
                  internalType: "address",
                  name: "_consumer",
                  type: "address",
                },
              ],
              name: "addConsumer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
              ],
              name: "cancelSubscription",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
                {
                  internalType: "address",
                  name: "_consumer",
                  type: "address",
                },
              ],
              name: "consumerIsAdded",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "createSubscription",
              outputs: [
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_requestId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_consumer",
                  type: "address",
                },
              ],
              name: "fulfillRandomWords",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_requestId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_consumer",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "_words",
                  type: "uint256[]",
                },
              ],
              name: "fulfillRandomWordsWithOverride",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
                {
                  internalType: "uint96",
                  name: "_amount",
                  type: "uint96",
                },
              ],
              name: "fundSubscription",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getConfig",
              outputs: [
                {
                  internalType: "uint16",
                  name: "minimumRequestConfirmations",
                  type: "uint16",
                },
                {
                  internalType: "uint32",
                  name: "maxGasLimit",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "stalenessSeconds",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "gasAfterPaymentCalculation",
                  type: "uint32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFallbackWeiPerUnitLink",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getFeeConfig",
              outputs: [
                {
                  internalType: "uint32",
                  name: "fulfillmentFlatFeeLinkPPMTier1",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "fulfillmentFlatFeeLinkPPMTier2",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "fulfillmentFlatFeeLinkPPMTier3",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "fulfillmentFlatFeeLinkPPMTier4",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "fulfillmentFlatFeeLinkPPMTier5",
                  type: "uint32",
                },
                {
                  internalType: "uint24",
                  name: "reqsForTier2",
                  type: "uint24",
                },
                {
                  internalType: "uint24",
                  name: "reqsForTier3",
                  type: "uint24",
                },
                {
                  internalType: "uint24",
                  name: "reqsForTier4",
                  type: "uint24",
                },
                {
                  internalType: "uint24",
                  name: "reqsForTier5",
                  type: "uint24",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getRequestConfig",
              outputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
                {
                  internalType: "uint32",
                  name: "",
                  type: "uint32",
                },
                {
                  internalType: "bytes32[]",
                  name: "",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
              ],
              name: "getSubscription",
              outputs: [
                {
                  internalType: "uint96",
                  name: "balance",
                  type: "uint96",
                },
                {
                  internalType: "uint64",
                  name: "reqCount",
                  type: "uint64",
                },
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "consumers",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint64",
                  name: "subId",
                  type: "uint64",
                },
              ],
              name: "pendingRequestExists",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
                {
                  internalType: "address",
                  name: "_consumer",
                  type: "address",
                },
              ],
              name: "removeConsumer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_keyHash",
                  type: "bytes32",
                },
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
                {
                  internalType: "uint16",
                  name: "_minimumRequestConfirmations",
                  type: "uint16",
                },
                {
                  internalType: "uint32",
                  name: "_callbackGasLimit",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "_numWords",
                  type: "uint32",
                },
              ],
              name: "requestRandomWords",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint64",
                  name: "_subId",
                  type: "uint64",
                },
                {
                  internalType: "address",
                  name: "_newOwner",
                  type: "address",
                },
              ],
              name: "requestSubscriptionOwnerTransfer",
              outputs: [],
              stateMutability: "pure",
              type: "function",
            },
          ],
        },
        YourContract: {
          address: "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
