pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract WRAMA is ERC20 {
    event Deposit(address indexed dst, uint256 wad);
    event Withdrawal(address indexed src, uint256 wad);
    
    string public name = "Ramestta Wrapped Rama";
    string public symbol = "WRAMA";
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
