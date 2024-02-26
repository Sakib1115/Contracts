pragma solidity ^0.5.2;

import {WMATIC} from "./WMATIC.sol";


contract RamaWMATIC is WMATIC {
    string public name = "Wrapped Matic";
    string public symbol = "WMATIC";
    uint8 public decimals = 18;

    function deposit() public payable {
        _mint(msg.sender, msg.value);
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw(uint256 wad) public {
        require(balanceOf(msg.sender) >= wad);
        _burn(msg.sender, wad);
        msg.sender.transfer(wad);
        emit Withdrawal(msg.sender, wad);
    }

    function withdraw(uint256 wad, address user) public {
        require(balanceOf(msg.sender) >= wad);
        _burn(msg.sender, wad);
        address(uint160(user)).transfer(wad);
        emit Withdrawal(user, wad);
    }
}
