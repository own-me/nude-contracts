const Nude = artifacts.require("Nude");
const NudeNFT = artifacts.require("NudeNFT");

module.exports = function(deployer) {
  deployer.deploy(Nude);
  deployer.deploy(NudeNFT);
};