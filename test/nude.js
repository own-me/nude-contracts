const NudeCoin = artifacts.require("Nude");

contract("NudeCoin tests", async accounts => {
  it("should put 69696969 NudeCoin in the first account", async () => {
    const instance = await NudeCoin.deployed();
    const balance = await instance.balanceOf.call(accounts[0]);
    assert.equal(balance.valueOf(), 69696969);
  });
});