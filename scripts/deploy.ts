import { ethers } from "hardhat";

async function main() {
  const Nude = await ethers.getContractFactory("Nude");
  const NudeNFT = await ethers.getContractFactory("NudeNFT");

  const nude = await Nude.deploy();
  const nudeNFT = await NudeNFT.deploy();

  await nude.deployed();
  await nudeNFT.deployed();

  console.log("NUDE deployed to:", nude.address);
  console.log("NUDE_NFT deployed to:", nude.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
