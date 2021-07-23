const Nude = artifacts.require("Nude");
const NudeNFT = artifacts.require("NudeNFT");

module.exports = function(deployer) {
  deployer.deploy(Nude, 69696969);
  deployer.deploy(NudeNFT);
};