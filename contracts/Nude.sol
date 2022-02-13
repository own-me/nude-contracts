// SPDX-License-Identifier: BSD 3-Clause
// Own Me Inc. -CJFT
// www.ownme.io
// Nude. MATIC Polygon ERC20 in-app currency and governance token that powers our home for adult content in the web3 metaverse.

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
