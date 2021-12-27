/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NudeNFT, NudeNFTInterface } from "../NudeNFT";

const _abi = [
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "newNFTMinted",
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
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
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
    inputs: [],
    name: "renounceOwnership",
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
        name: "_data",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600781526020017f4e7564654e4654000000000000000000000000000000000000000000000000008152506040518060400160405280600781526020017f4e5544454e465400000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620001a6565b508060019080519060200190620000af929190620001a6565b505050620000d2620000c6620000d860201b60201c565b620000e060201b60201c565b620002bb565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001b49062000285565b90600052602060002090601f016020900481019282620001d8576000855562000224565b82601f10620001f357805160ff191683800117855562000224565b8280016001018555821562000224579182015b828111156200022357825182559160200191906001019062000206565b5b50905062000233919062000237565b5090565b5b808211156200025257600081600090555060010162000238565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200029e57607f821691505b60208210811415620002b557620002b462000256565b5b50919050565b61315780620002cb6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063a22cb46511610071578063a22cb465146102b8578063b88d4fde146102d4578063c87b56dd146102f0578063e985e9c514610320578063f2fde38b146103505761010b565b806370a0823114610242578063715018a6146102725780638da5cb5b1461027c57806395d89b411461029a5761010b565b8063095ea7b3116100de578063095ea7b3146101be57806323b872dd146101da57806342842e0e146101f65780636352211e146102125761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e57806308598df01461018e575b600080fd5b61012a60048036038101906101259190611cf0565b61036c565b6040516101379190611d38565b60405180910390f35b61014861044e565b6040516101559190611dec565b60405180910390f35b61017860048036038101906101739190611e44565b6104e0565b6040516101859190611eb2565b60405180910390f35b6101a860048036038101906101a3919061202e565b610565565b6040516101b591906120ac565b60405180910390f35b6101d860048036038101906101d391906120c7565b610635565b005b6101f460048036038101906101ef9190612107565b61074d565b005b610210600480360381019061020b9190612107565b6107ad565b005b61022c60048036038101906102279190611e44565b6107cd565b6040516102399190611eb2565b60405180910390f35b61025c6004803603810190610257919061215a565b61087f565b60405161026991906120ac565b60405180910390f35b61027a610937565b005b6102846109bf565b6040516102919190611eb2565b60405180910390f35b6102a26109e9565b6040516102af9190611dec565b60405180910390f35b6102d260048036038101906102cd91906121b3565b610a7b565b005b6102ee60048036038101906102e99190612294565b610a91565b005b61030a60048036038101906103059190611e44565b610af3565b6040516103179190611dec565b60405180910390f35b61033a60048036038101906103359190612317565b610b05565b6040516103479190611d38565b60405180910390f35b61036a6004803603810190610365919061215a565b610b99565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061043757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610447575061044682610c91565b5b9050919050565b60606000805461045d90612386565b80601f016020809104026020016040519081016040528092919081815260200182805461048990612386565b80156104d65780601f106104ab576101008083540402835291602001916104d6565b820191906000526020600020905b8154815290600101906020018083116104b957829003601f168201915b5050505050905090565b60006104eb82610cfb565b61052a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105219061242a565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008082116105a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a090612496565b60405180910390fd5b6105b36008610d67565b60006105bf6008610d7d565b90506105cb8582610d8b565b6105d58185610da9565b8260096000838152602001908152602001600020819055507f7ad3b13b7c3746750560e47a50427c59add26e172574ed9eae86be47839170a38582868660405161062294939291906124b6565b60405180910390a1809150509392505050565b6000610640826107cd565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a890612574565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106d0610e1d565b73ffffffffffffffffffffffffffffffffffffffff1614806106ff57506106fe816106f9610e1d565b610b05565b5b61073e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073590612606565b60405180910390fd5b6107488383610e25565b505050565b61075e610758610e1d565b82610ede565b61079d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079490612698565b60405180910390fd5b6107a8838383610fbc565b505050565b6107c883838360405180602001604052806000815250610a91565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610876576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086d9061272a565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e7906127bc565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61093f610e1d565b73ffffffffffffffffffffffffffffffffffffffff1661095d6109bf565b73ffffffffffffffffffffffffffffffffffffffff16146109b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109aa90612828565b60405180910390fd5b6109bd6000611218565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600180546109f890612386565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2490612386565b8015610a715780601f10610a4657610100808354040283529160200191610a71565b820191906000526020600020905b815481529060010190602001808311610a5457829003601f168201915b5050505050905090565b610a8d610a86610e1d565b83836112de565b5050565b610aa2610a9c610e1d565b83610ede565b610ae1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad890612698565b60405180910390fd5b610aed8484848461144b565b50505050565b6060610afe826114a7565b9050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610ba1610e1d565b73ffffffffffffffffffffffffffffffffffffffff16610bbf6109bf565b73ffffffffffffffffffffffffffffffffffffffff1614610c15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0c90612828565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610c85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7c906128ba565b60405180910390fd5b610c8e81611218565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b610da58282604051806020016040528060008152506115f9565b5050565b610db282610cfb565b610df1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de89061294c565b60405180910390fd5b80600660008481526020019081526020016000209080519060200190610e18929190611be1565b505050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610e98836107cd565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610ee982610cfb565b610f28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1f906129de565b60405180910390fd5b6000610f33836107cd565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610fa257508373ffffffffffffffffffffffffffffffffffffffff16610f8a846104e0565b73ffffffffffffffffffffffffffffffffffffffff16145b80610fb35750610fb28185610b05565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610fdc826107cd565b73ffffffffffffffffffffffffffffffffffffffff1614611032576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102990612a70565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109990612b02565b60405180910390fd5b6110ad838383611654565b6110b8600082610e25565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111089190612b51565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461115f9190612b85565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561134d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134490612c27565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161143e9190611d38565b60405180910390a3505050565b611456848484610fbc565b61146284848484611659565b6114a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161149890612cb9565b60405180910390fd5b50505050565b60606114b282610cfb565b6114f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114e890612d4b565b60405180910390fd5b600060066000848152602001908152602001600020805461151190612386565b80601f016020809104026020016040519081016040528092919081815260200182805461153d90612386565b801561158a5780601f1061155f5761010080835404028352916020019161158a565b820191906000526020600020905b81548152906001019060200180831161156d57829003601f168201915b50505050509050600061159b6117e1565b90506000815114156115b15781925050506115f4565b6000825111156115e65780826040516020016115ce929190612da7565b604051602081830303815290604052925050506115f4565b6115ef846117f8565b925050505b919050565b611603838361189f565b6116106000848484611659565b61164f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161164690612cb9565b60405180910390fd5b505050565b505050565b600061167a8473ffffffffffffffffffffffffffffffffffffffff16611a6d565b156117d4578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026116a3610e1d565b8786866040518563ffffffff1660e01b81526004016116c59493929190612e20565b6020604051808303816000875af192505050801561170157506040513d601f19601f820116820180604052508101906116fe9190612e81565b60015b611784573d8060008114611731576040519150601f19603f3d011682016040523d82523d6000602084013e611736565b606091505b5060008151141561177c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161177390612cb9565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506117d9565b600190505b949350505050565b606060405180602001604052806000815250905090565b606061180382610cfb565b611842576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161183990612f20565b60405180910390fd5b600061184c6117e1565b9050600081511161186c5760405180602001604052806000815250611897565b8061187684611a80565b604051602001611887929190612da7565b6040516020818303038152906040525b915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561190f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161190690612f8c565b60405180910390fd5b61191881610cfb565b15611958576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161194f90612ff8565b60405180910390fd5b61196460008383611654565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546119b49190612b85565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080823b905060008111915050919050565b60606000821415611ac8576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611bdc565b600082905060005b60008214611afa578080611ae390613018565b915050600a82611af39190613090565b9150611ad0565b60008167ffffffffffffffff811115611b1657611b15611f03565b5b6040519080825280601f01601f191660200182016040528015611b485781602001600182028036833780820191505090505b5090505b60008514611bd557600182611b619190612b51565b9150600a85611b7091906130c1565b6030611b7c9190612b85565b60f81b818381518110611b9257611b916130f2565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611bce9190613090565b9450611b4c565b8093505050505b919050565b828054611bed90612386565b90600052602060002090601f016020900481019282611c0f5760008555611c56565b82601f10611c2857805160ff1916838001178555611c56565b82800160010185558215611c56579182015b82811115611c55578251825591602001919060010190611c3a565b5b509050611c639190611c67565b5090565b5b80821115611c80576000816000905550600101611c68565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611ccd81611c98565b8114611cd857600080fd5b50565b600081359050611cea81611cc4565b92915050565b600060208284031215611d0657611d05611c8e565b5b6000611d1484828501611cdb565b91505092915050565b60008115159050919050565b611d3281611d1d565b82525050565b6000602082019050611d4d6000830184611d29565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611d8d578082015181840152602081019050611d72565b83811115611d9c576000848401525b50505050565b6000601f19601f8301169050919050565b6000611dbe82611d53565b611dc88185611d5e565b9350611dd8818560208601611d6f565b611de181611da2565b840191505092915050565b60006020820190508181036000830152611e068184611db3565b905092915050565b6000819050919050565b611e2181611e0e565b8114611e2c57600080fd5b50565b600081359050611e3e81611e18565b92915050565b600060208284031215611e5a57611e59611c8e565b5b6000611e6884828501611e2f565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611e9c82611e71565b9050919050565b611eac81611e91565b82525050565b6000602082019050611ec76000830184611ea3565b92915050565b611ed681611e91565b8114611ee157600080fd5b50565b600081359050611ef381611ecd565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611f3b82611da2565b810181811067ffffffffffffffff82111715611f5a57611f59611f03565b5b80604052505050565b6000611f6d611c84565b9050611f798282611f32565b919050565b600067ffffffffffffffff821115611f9957611f98611f03565b5b611fa282611da2565b9050602081019050919050565b82818337600083830152505050565b6000611fd1611fcc84611f7e565b611f63565b905082815260208101848484011115611fed57611fec611efe565b5b611ff8848285611faf565b509392505050565b600082601f83011261201557612014611ef9565b5b8135612025848260208601611fbe565b91505092915050565b60008060006060848603121561204757612046611c8e565b5b600061205586828701611ee4565b935050602084013567ffffffffffffffff81111561207657612075611c93565b5b61208286828701612000565b925050604061209386828701611e2f565b9150509250925092565b6120a681611e0e565b82525050565b60006020820190506120c1600083018461209d565b92915050565b600080604083850312156120de576120dd611c8e565b5b60006120ec85828601611ee4565b92505060206120fd85828601611e2f565b9150509250929050565b6000806000606084860312156121205761211f611c8e565b5b600061212e86828701611ee4565b935050602061213f86828701611ee4565b925050604061215086828701611e2f565b9150509250925092565b6000602082840312156121705761216f611c8e565b5b600061217e84828501611ee4565b91505092915050565b61219081611d1d565b811461219b57600080fd5b50565b6000813590506121ad81612187565b92915050565b600080604083850312156121ca576121c9611c8e565b5b60006121d885828601611ee4565b92505060206121e98582860161219e565b9150509250929050565b600067ffffffffffffffff82111561220e5761220d611f03565b5b61221782611da2565b9050602081019050919050565b6000612237612232846121f3565b611f63565b90508281526020810184848401111561225357612252611efe565b5b61225e848285611faf565b509392505050565b600082601f83011261227b5761227a611ef9565b5b813561228b848260208601612224565b91505092915050565b600080600080608085870312156122ae576122ad611c8e565b5b60006122bc87828801611ee4565b94505060206122cd87828801611ee4565b93505060406122de87828801611e2f565b925050606085013567ffffffffffffffff8111156122ff576122fe611c93565b5b61230b87828801612266565b91505092959194509250565b6000806040838503121561232e5761232d611c8e565b5b600061233c85828601611ee4565b925050602061234d85828601611ee4565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061239e57607f821691505b602082108114156123b2576123b1612357565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000612414602c83611d5e565b915061241f826123b8565b604082019050919050565b6000602082019050818103600083015261244381612407565b9050919050565b7f5072696365206d7573742062652067726561746572207468616e203000000000600082015250565b6000612480601c83611d5e565b915061248b8261244a565b602082019050919050565b600060208201905081810360008301526124af81612473565b9050919050565b60006080820190506124cb6000830187611ea3565b6124d8602083018661209d565b81810360408301526124ea8185611db3565b90506124f9606083018461209d565b95945050505050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061255e602183611d5e565b915061256982612502565b604082019050919050565b6000602082019050818103600083015261258d81612551565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b60006125f0603883611d5e565b91506125fb82612594565b604082019050919050565b6000602082019050818103600083015261261f816125e3565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b6000612682603183611d5e565b915061268d82612626565b604082019050919050565b600060208201905081810360008301526126b181612675565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b6000612714602983611d5e565b915061271f826126b8565b604082019050919050565b6000602082019050818103600083015261274381612707565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b60006127a6602a83611d5e565b91506127b18261274a565b604082019050919050565b600060208201905081810360008301526127d581612799565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612812602083611d5e565b915061281d826127dc565b602082019050919050565b6000602082019050818103600083015261284181612805565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006128a4602683611d5e565b91506128af82612848565b604082019050919050565b600060208201905081810360008301526128d381612897565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000612936602e83611d5e565b9150612941826128da565b604082019050919050565b6000602082019050818103600083015261296581612929565b9050919050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b60006129c8602c83611d5e565b91506129d38261296c565b604082019050919050565b600060208201905081810360008301526129f7816129bb565b9050919050565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b6000612a5a602983611d5e565b9150612a65826129fe565b604082019050919050565b60006020820190508181036000830152612a8981612a4d565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612aec602483611d5e565b9150612af782612a90565b604082019050919050565b60006020820190508181036000830152612b1b81612adf565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612b5c82611e0e565b9150612b6783611e0e565b925082821015612b7a57612b79612b22565b5b828203905092915050565b6000612b9082611e0e565b9150612b9b83611e0e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612bd057612bcf612b22565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612c11601983611d5e565b9150612c1c82612bdb565b602082019050919050565b60006020820190508181036000830152612c4081612c04565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612ca3603283611d5e565b9150612cae82612c47565b604082019050919050565b60006020820190508181036000830152612cd281612c96565b9050919050565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b6000612d35603183611d5e565b9150612d4082612cd9565b604082019050919050565b60006020820190508181036000830152612d6481612d28565b9050919050565b600081905092915050565b6000612d8182611d53565b612d8b8185612d6b565b9350612d9b818560208601611d6f565b80840191505092915050565b6000612db38285612d76565b9150612dbf8284612d76565b91508190509392505050565b600081519050919050565b600082825260208201905092915050565b6000612df282612dcb565b612dfc8185612dd6565b9350612e0c818560208601611d6f565b612e1581611da2565b840191505092915050565b6000608082019050612e356000830187611ea3565b612e426020830186611ea3565b612e4f604083018561209d565b8181036060830152612e618184612de7565b905095945050505050565b600081519050612e7b81611cc4565b92915050565b600060208284031215612e9757612e96611c8e565b5b6000612ea584828501612e6c565b91505092915050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000612f0a602f83611d5e565b9150612f1582612eae565b604082019050919050565b60006020820190508181036000830152612f3981612efd565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612f76602083611d5e565b9150612f8182612f40565b602082019050919050565b60006020820190508181036000830152612fa581612f69565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612fe2601c83611d5e565b9150612fed82612fac565b602082019050919050565b6000602082019050818103600083015261301181612fd5565b9050919050565b600061302382611e0e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561305657613055612b22565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061309b82611e0e565b91506130a683611e0e565b9250826130b6576130b5613061565b5b828204905092915050565b60006130cc82611e0e565b91506130d783611e0e565b9250826130e7576130e6613061565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea264697066735822122091aa44022d2eb0ce0ab1e3d4d74feb68fb96d35b57fb33fabaa76eb7986fc17664736f6c634300080b0033";

export class NudeNFT__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NudeNFT> {
    return super.deploy(overrides || {}) as Promise<NudeNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NudeNFT {
    return super.attach(address) as NudeNFT;
  }
  connect(signer: Signer): NudeNFT__factory {
    return super.connect(signer) as NudeNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NudeNFTInterface {
    return new utils.Interface(_abi) as NudeNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NudeNFT {
    return new Contract(address, _abi, signerOrProvider) as NudeNFT;
  }
}
