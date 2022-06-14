// SPDX-License-Identifier: BSD 3-Clause
// Own Me Inc.
// www.ownme.io
// Nude. MATIC Polygon ERC20 in-app currency and governance token that powers our home for adult content in the web3 metaverse.

pragma solidity ^0.8.14;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./NudeDEX.sol";

contract Nude is ERC20, ERC20Votes, Ownable {

    uint256 public initialSupply = 69696969;
    uint256 public tokensSold;
    uint256 public tokenRate = 10; // how many tokens can bought with 1 eth
    NudeDEX private dexContract;
    uint8 public tax = 10;

    event Sell(address _buyer, uint256 _amount);

    constructor() ERC20("Nude", "NUDE") ERC20Permit("Nude") {
        _mint(msg.sender, initialSupply * (10**decimals()));
    }

    function setNudeDex(address dexAddress) external onlyOwner {
        dexContract = NudeDEX(dexAddress);
    }

    function buyTokens(uint256 _numberOfTokens) external payable {
        require(
            msg.value * tokenRate == _numberOfTokens * (10**decimals()),
            "Not exact amount"
        );
        require(balanceOf(owner()) >= _numberOfTokens, "Not enough tokens");
        _transfer(owner(), msg.sender, _numberOfTokens);
        tokensSold += _numberOfTokens;
        emit Sell(msg.sender, _numberOfTokens);
    }

    function transferTokens(
        address from,
        address to,
        uint256 amount
    ) external {
        require(balanceOf(from) >= amount, "Not enough tokens");
        _transfer(from, to, amount);
    }

    function approveAndBuyNFT(uint256 tokenId) external {
        uint256 price = dexContract.getPrice(tokenId);
        super.approve(address(dexContract), (price * (100 + tax)) / 100);
        dexContract.trade(tokenId, msg.sender);
    }

    // override functions for ERC20Votes
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20, ERC20Votes) {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount) internal override(ERC20, ERC20Votes) {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount) internal override(ERC20, ERC20Votes) {
        super._burn(account, amount);
    }
    // todo: implement sell tokens function
}
