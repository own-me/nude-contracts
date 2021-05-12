// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Nude is ERC20 {
    address private owner;
    mapping (address => uint256) pendingWithdrawals;

    constructor(uint256 initialSupply) public ERC20("Nude", "NUDE") {
        _mint(msg.sender, initialSupply);
        owner = msg.sender;
    }

    function buy(uint256 amount) external payable {
        require(amount == ((msg.value / 1 ether)), "Incorrect amount of Eth.");
        transferFrom(owner, msg.sender, amount);
    }
    
    function sell(uint256 amount) public {
        pendingWithdrawals[msg.sender] = amount;
        transfer(owner, amount);
        withdrawEth();
    }

    function withdrawEth() public {
        uint256 amount = pendingWithdrawals[msg.sender];
        pendingWithdrawals[msg.sender] = 0;  // prevent re-entrancy attacks
        payable(msg.sender).transfer(amount * 1 ether);
    }
}
