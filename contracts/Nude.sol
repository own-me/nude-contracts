// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Nude is ERC20 {
    address private owner;
    mapping (address => uint256) balances;

    constructor(uint256 initialSupply) ERC20("Nude", "NUDE") {
        _mint(msg.sender, initialSupply);
        owner = msg.sender; 
    }
}
