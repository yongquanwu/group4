pragma solidity ^0.6.2;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.1.0/contracts/token/ERC20/ERC20.sol";


contract SimpleToken is ERC20 {

    constructor () public ERC20("Token of Generosity", "TOG") {
    _setupDecimals(0);
    _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    }
}