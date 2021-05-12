const Nude = artifacts.require("Nude");

module.exports = function(deployer) {
  deployer.deploy(Nude, 1000);
};