// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

struct SwapData {
    address sender;
    uint256 amountAIn;
    uint256 amountBIn;
    uint256 amountAOut;
    uint256 amountBOut;
    address to;
}

struct BurnData {
    address sender;
    uint256 amountA;
    uint256 amountB;
    address to;
}

interface ITokenPair {
    event Mint(address indexed sender, uint256 indexed amountA, uint256 indexed amountB);
    event Burn(BurnData burnData);
    event Swap(SwapData swapData);
    event Sync(uint256 reserveA, uint256 reserveB);
    function factory() external view returns (address);
    function tokenA() external view returns (address);
    function tokenB() external view returns (address);
    function kLast() external view returns (uint256);
    function getReserves() external view returns (uint256 reserveA, uint256 reserveB, uint256 blockTimestampLast);
    function mint (address to) external returns (uint256 liquidity);
    function burn (address to) external returns (uint256 amountA, uint256 amountB);
    function swap(uint256 amountAOut, uint256 amountBOut, address to) external;
    function skim(address to) external;
    function sync() external;
    function initialize(address, address) external;
}




