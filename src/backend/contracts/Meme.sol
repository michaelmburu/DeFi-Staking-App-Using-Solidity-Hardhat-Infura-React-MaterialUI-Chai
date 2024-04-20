// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title MemeToken
 */

 contract MemeToken is ERC20 {
    constructor() ERC20("Meme", "MEME") {
        // Initial supply of 1,000,000,000,000 tokens are given to msg.sender
        _mint(msg.sender, 1e27);
    }
 }

 