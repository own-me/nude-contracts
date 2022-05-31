import { ethers } from "hardhat";

async function main() {
  const Nude = await ethers.getContractFactory("Nude");
  const NudeNFT = await ethers.getContractFactory("NudeNFT");
  const NudeDEX = await ethers.getContractFactory("NudeDEX");

  const nude = await Nude.deploy();
  await nude.deployed();
  console.log("NUDE deployed to:", nude.address);

  const nudeNFT = await NudeNFT.deploy();
  await nudeNFT.deployed();
  console.log("NUDE_NFT deployed to:", nudeNFT.address);

  const nudeDEX = await NudeDEX.deploy(nude.address, nudeNFT.address);

  await nudeDEX.deployed();
  console.log("NUDE_DEX deployed to:", nudeDEX.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
