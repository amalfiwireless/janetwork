pragma solidity ^0.4.2;

contract NeedHelp {
  // Model a Mary
  /* struct Mary {
    uint id;
    string name;
    uint weeksPreg;
    string emailAddress;
    uint phoneNumber;
    uint lat;
    uint long;
  } */

  // Model a midwife
  struct Jane {
    uint id;
    string name;
    uint phoneNumber;
    string emailAddress;
    uint lat;
    uint long;
  }
  //  Fetch midwives
  mapping(uint => Jane) public janes;
  // Number of midmives
  uint public janesCount;

  function NeedHelp () public {
    addJane("Axie Muldoom", 6507634558, "axie@stanfordmed.com", 45, 34);
    addJane("Paul Blumenthal", 4567778954, "paul@nirvana.com", 49, 88);
    addJane("Aditya Khandelwal", 7553332222, "aditya@india.com", 22, 44);
  }

  function addJane (string _name, uint _phoneNumber, string _emailAddress, uint _lat, uint _long) private {
    janesCount++;
    janes[janesCount] = Jane(janesCount, _name, _phoneNumber, _emailAddress, _lat, _long);
  }
}
