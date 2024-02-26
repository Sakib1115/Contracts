pragma solidity ^0.5.2;

import { ERC20Pausable } from "openzeppelin-solidity/contracts/token/ERC20/ERC20Pausable.sol";
import { ERC20Detailed } from "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";


contract RamaToken is ERC20Pausable, ERC20Detailed {
    constructor (string memory name, string memory symbol, uint8 decimals)
    public
    ERC20Detailed (name, symbol, decimals) {
        uint256 totalSupply = 10**9 * (10**18);
        _mint(msg.sender, totalSupply);
    }
}