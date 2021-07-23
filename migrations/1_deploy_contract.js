const Nude = artifacts.require("Nude");
const NudeNFT = artifacts.require("NudeNFT");

module.exports = function(deployer) {
  deployer.deploy(Nude, 1000);
  deployer.deploy(NudeNFT);
};