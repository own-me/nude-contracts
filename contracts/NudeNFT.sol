// SPDX-License-Identifier: BSD 3-Clause
// Own Me Inc. -CJFT
// www.ownme.io
// NudeNFT. MATIC Polygon ERC721 NFT token that powers our home for adult content in the web3 metaverse.

pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NudeNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private tokenIdCounter;

    mapping(uint256 => uint256) private tokenPrices;
    address payable private owner;
    uint8 public tax = 69;

    constructor() ERC721("NudeNFT", "NUDENFT") {
        owner = payable(msg.sender);
    }

    event MintNFT(
        address recipient,
        uint256 tokenId,
        string tokenURI,
        uint256 price
    );

    function mintNFT(
        address recipient,
        string memory tokenURI,
        uint256 price
    ) public returns (uint256) {
        require(price > 0, "Price must be greater than 0");
        tokenIdCounter.increment();
        uint256 newItemId = tokenIdCounter.current();
        super._safeMint(recipient, newItemId);
        super._setTokenURI(newItemId, tokenURI);
        tokenPrices[newItemId] = price;
        emit MintNFT(recipient, newItemId, tokenURI, price);
        return newItemId;
    }

    event BuyNFT(
        uint256 tokenId,
        address buyer,
        address seller,
        uint256 price
    );

    function buyNFT(uint256 tokenId) public payable {
        require(
            msg.value >= tokenPrices[tokenId],
            "Insufficient gwei for purchase"
        );
        super.safeTransferFrom(ownerOf(tokenId), msg.sender, tokenId);
        payable(ownerOf(tokenId)).transfer(msg.value - (msg.value * (tax / 1000)));
        emit BuyNFT(tokenId, msg.sender, ownerOf(tokenId), msg.value);
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

    function getPrice(uint256 tokenId)
        public
        view
        returns (uint256)
    {
        require(tokenPrices[tokenId] != 0, "Token price does not exist");
        return tokenPrices[tokenId];
    }
}
