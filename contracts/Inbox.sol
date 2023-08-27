// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;
import "hardhat/console.sol";

contract Inbox {
    string public message;

    constructor(string memory _message) {
        console.log("Got msg: ", _message);
        message = _message;
    }

    function setMessage(string memory _message) public {
        message = _message;
    }
}
