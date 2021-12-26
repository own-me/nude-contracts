// SPDX-License-Identifier: BSD 3-Clause
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Nude is ERC20 {
    address private owner;
    uint256 public initialSupply = 69696969;

    constructor() ERC20("Nude", "NUDE") {
        _mint(msg.sender, initialSupply * (10 ** decimals()));
        owner = msg.sender; 
    }
}
