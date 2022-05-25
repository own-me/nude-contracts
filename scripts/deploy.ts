import { ethers } from "hardhat";

async function main() {
  const Nude = await ethers.getContractFactory("Nude");
  const NudeNFT = await ethers.getContractFactory("NudeNFT");

  const nude = await Nude.deploy();
  await nude.deployed();
  console.log("NUDE deployed to:", nude.address);

  const nudeNFT = await NudeNFT.deploy(nude.address);
  await nudeNFT.deployed();
  console.log("NUDE_NFT deployed to:", nudeNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
