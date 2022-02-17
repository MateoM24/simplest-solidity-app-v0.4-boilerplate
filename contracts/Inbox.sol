pragma solidity ^0.4.17;

contract Inbox {
    string public message;

    function constructor(string initialMessage) public {
        message = initialMessage;
    }

    function setMesssage(string newMessage) public {
        message = newMessage;
    }
    
}