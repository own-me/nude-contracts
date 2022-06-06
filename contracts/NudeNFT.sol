// SPDX-License-Identifier: BSD 3-Clause
// Own Me Inc.
// www.ownme.io
// NudeNFT. MATIC Polygon ERC721 NFT token that powers our home for adult content in the web3 metaverse.

pragma solidity ^0.8.14;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./NudeDEX.sol";

contract NudeNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private tokenIdCounter;

    address payable private contractOwner;
    NudeDEX private dexContract;

    event MintNFT(address recipient, uint256 tokenId, string tokenURI);

    constructor() ERC721("NudeNFT", "NUDENFT") {
        contractOwner = payable(msg.sender);
    }

    function setNudeDex(address dexAddress) external onlyOwner {
        dexContract = NudeDEX(dexAddress);
    }

    function mintNFT(address recipient, string memory tokenURI)
        public
        returns (uint256)
    {
        tokenIdCounter.increment();
        uint256 newItemId = tokenIdCounter.current();
        super._safeMint(recipient, newItemId);
        super._setTokenURI(newItemId, tokenURI);
        emit MintNFT(recipient, newItemId, tokenURI);
        return newItemId;
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function approveAndTransferToDEX(uint256 tokenId, uint256 price) external {
        require(ownerOf(tokenId) == msg.sender, "not your nft");
        require(address(dexContract) != address(0), "dex not setup yet");
        super._approve(address(dexContract), tokenId);
        dexContract.onSale(tokenId, price, msg.sender);
    }
}
