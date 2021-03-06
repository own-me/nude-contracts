// SPDX-License-Identifier: BSD 3-Clause
// Own Me Inc.
// www.ownme.io
// NudeDEX. MATIC Polygon ERC721 Decentralized Exchange for Nude token and NudeNFT.

pragma solidity ^0.8.14;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "./Nude.sol";
import "./NudeNFT.sol";

contract NudeDEX is IERC721Receiver, Ownable {
    Nude private nude;
    NudeNFT private nudeNFT;
    uint8 public tax = 10;

    mapping(uint256 => uint256) private lastTradePrices;
    mapping(uint256 => uint256) private nftPrices;
    mapping(uint256 => address) private nftOwners;

    event OnSaleNFT(address owner, uint256 tokenId, uint256 price);
    event TakeDownNFT(address owner, uint256 tokenId);
    event Trade(address buyer, address seller, uint256 tokenId, uint256 price);

    constructor(address _nude, address _nudeNFT) {
        nude = Nude(_nude);
        nudeNFT = NudeNFT(_nudeNFT);
    }

    // implement IERC721Receiver so contract can receive nft
    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external pure returns (bytes4) {
        return
            bytes4(
                keccak256("onERC721Received(address,address,uint256,bytes)")
            );
    }

    // May needed when we need update Nude token or NFT contract
    function setNudeTokenAddress(address _nude) external onlyOwner {
        nude = Nude(_nude);
    }

    function setNudeNFTAddress(address _nudeNFT) external onlyOwner {
        nudeNFT = NudeNFT(_nudeNFT);
    }

    function getLastTradePrice(uint256 tokenId) public view returns (uint256) {
        require(
            lastTradePrices[tokenId] != 0,
            "Last trade price does not exist"
        );
        return lastTradePrices[tokenId];
    }

    function getPrice(uint256 tokenId) public view returns (uint256) {
        require(nftPrices[tokenId] != 0, "NFT price does not exist");
        return nftPrices[tokenId];
    }

    // owner gives nft to dex so dex can sell it
    function onSale(
        uint256 tokenId,
        uint256 price,
        address seller
    ) external {
        require(price > 0, "Price must be greater than 0");
        require(nudeNFT.ownerOf(tokenId) == seller, "Not your NFT");
        nudeNFT.safeTransferFrom(seller, address(this), tokenId);
        nftOwners[tokenId] = seller;
        nftPrices[tokenId] = price;
        emit OnSaleNFT(seller, tokenId, price);
    }

    // owner takes nft from dex
    function takeDown(uint256 tokenId) external {
        require(
            nftOwners[tokenId] != address(0) && nftPrices[tokenId] > 0,
            "NFT not on sale"
        );
        require(nftOwners[tokenId] == msg.sender, "Not your NFT");
        nudeNFT.approve(msg.sender, tokenId);
        nudeNFT.safeTransferFrom(address(this), msg.sender, tokenId);
        delete nftOwners[tokenId];
        delete nftPrices[tokenId];
        emit TakeDownNFT(msg.sender, tokenId);
    }

    // customer buys nft from dex, dex pays to nft owner
    function trade(uint256 tokenId, address buyer) external {
        require(
            nftOwners[tokenId] != address(0) && nftPrices[tokenId] > 0,
            "NFT not on sale"
        );
        uint256 price = nftPrices[tokenId];
        require(buyer != nftOwners[tokenId], "You can't buy your own NFT");
        require(
            nude.balanceOf(buyer) >= ((price * (100 + tax)) / 100),
            "Not enough tokens to buy nft"
        );
        nude.transferFrom(buyer, address(this), ((price * (100 + tax)) / 100));
        address seller = nftOwners[tokenId];
        nude.approve(seller, price);
        nude.transfer(seller, price);
        nudeNFT.approve(buyer, tokenId);
        nudeNFT.safeTransferFrom(address(this), buyer, tokenId);
        lastTradePrices[tokenId] = price;
        emit Trade(buyer, seller, tokenId, price);
    }

    // owner can withdraw tokens from dex
    function withdraw(uint256 amount) external onlyOwner {
        require(
            nude.balanceOf(address(this)) >= amount,
            "Not enough tokens to withdraw"
        );
        nude.approve(super.owner(), amount);
        nude.transfer(super.owner(), amount);
    }
}
