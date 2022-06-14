import { ethers } from "hardhat";
// Needs total votes to pass 51%
const QUORUM_PERCENTAGE = 51;
// Votes will finished in 10 blocks
const VOTING_PERIOD = 10;
// Needs 1 block to vote after propose
const VOTING_DELAY = 1;

async function main() {
  const Nude = await ethers.getContractFactory("Nude");
  const NudeNFT = await ethers.getContractFactory("NudeNFT");
  const NudeDEX = await ethers.getContractFactory("NudeDEX");

  const NudeTimeLock = await ethers.getContractFactory("NudeTimeLock");
  const NudeGovernor = await ethers.getContractFactory("NudeGovernor");

  const nude = await Nude.deploy();
  await nude.deployed();
  console.log("NUDE deployed to:", nude.address);

  const nudeNFT = await NudeNFT.deploy();
  await nudeNFT.deployed();
  console.log("NUDE_NFT deployed to:", nudeNFT.address);

  const nudeDEX = await NudeDEX.deploy(nude.address, nudeNFT.address);

  await nudeDEX.deployed();
  console.log("NUDE_DEX deployed to:", nudeDEX.address);

  const nudeTimeLock = await NudeTimeLock.deploy(5, [], []);
  await nudeTimeLock.deployed();

  const nudeGovernor = await NudeGovernor.deploy(
    nude.address,
    nudeTimeLock.address,
    QUORUM_PERCENTAGE,
    VOTING_PERIOD,
    VOTING_DELAY
  );

  await nude.setNudeDex(nudeDEX.address);
  await nudeNFT.setNudeDex(nudeDEX.address);
  console.log("Set DEX address for token and NFT contracts");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
