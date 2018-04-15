var NeedHelp = artifacts.require("./NeedHelp.sol");

contract("NeedHelp", function(accounts) {
  it("initializes with a number of janes", function(){
    return NeedHelp.deployed().then(function(instance){
      return instance.janesCount();
    }).then(function(count){
      assert.equal(count, 3);
    })
  })
})
