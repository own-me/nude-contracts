// SPDX-License-Identifier: BSD 3-Clause
// Own Me Inc.
// www.ownme.io
// Nude. MATIC Polygon ERC20 in-app currency and governance token that powers our home for adult content in the web3 metaverse.

pragma solidity ^0.8.14;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Nude is ERC20, Ownable {

    uint256 public initialSupply = 69696969;
    uint256 public tokensSold;
    uint256 private tokenRate = 10; // how many weis costs per token

    event Sell(address _buyer, uint256 _amount);

    constructor() ERC20("Nude", "NUDE") {
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }

    function buyTokens(uint256 _numberOfTokens) external payable {
        require(msg.value == _numberOfTokens *tokenRate, "Not exact amount");
        require(balanceOf(owner()) >= _numberOfTokens, "Not enough tokens");
        _transfer(owner(), msg.sender, _numberOfTokens);
        tokensSold += _numberOfTokens;
        emit Sell(msg.sender, _numberOfTokens);
    }

    function transferTokens(address from, address to, uint256 amount ) external {
        require(balanceOf(from) >= amount, "Not enough tokens");
        _transfer(from, to, amount);
    }

    function setTokenRate(uint256 _rate) external onlyOwner {
        tokenRate = _rate;
    }
    // todo: implement sell tokens function
}
