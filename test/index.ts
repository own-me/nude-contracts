import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

describe("OWN ME CONTRACT TEST", function () {
  let Nude: Contract;
  let NudeNFT: Contract;
  let deployer: SignerWithAddress;
  let user1: SignerWithAddress;
  let user2: SignerWithAddress;
  const URI = "sampleURI";
  beforeEach(async () => {
    // Get signers from development accounts
    [deployer, user1, user2] = await ethers.getSigners();
    // We get the contract factory to deploy the contract
    const NudeFactory = await ethers.getContractFactory("Nude");
    const NudeNFTFactory = await ethers.getContractFactory("NudeNFT");
    // Deploy contract
    Nude = await NudeFactory.deploy();
    NudeNFT = await NudeNFTFactory.deploy();
  });

  describe("Deployment and initial check", () => {
    it("Should track name and symbol", async function () {
      expect(await Nude.name()).to.equal("Nude");
      expect(await Nude.symbol()).to.equal("NUDE");
      expect(await NudeNFT.name()).to.equal("NudeNFT");
      expect(await NudeNFT.symbol()).to.equal("NUDENFT");
    });
    it("Deployment should assign the total supply of tokens to the owner", async function () {
      expect(await Nude.balanceOf(deployer.address)).to.equal(
        await Nude.totalSupply()
      );
    });
  });

  describe("Mint NFTs", () => {
    const price = ethers.utils.parseEther("100");
    it("MintNFT should emit event", async function () {
      expect(await NudeNFT.mintNFT(user1.address, URI, price))
        .to.emit(NudeNFT, "MintNFT")
        .withArgs(user1.address, 1, URI, price);
    });
    it("Price should be able to check", async function () {
      await NudeNFT.mintNFT(user1.address, URI, price);
      expect(await NudeNFT.getPrice(1)).to.equal(price);
    });
  });

  describe("Buy NFTs", () => {
    const insufficientPrice = ethers.utils.parseEther("5");
    const price = ethers.utils.parseEther("10");
    it("Transaction test", async function () {
      await NudeNFT.connect(user1).mintNFT(user1.address, URI, price);
      await NudeNFT.connect(user1).approve(user2.address, 1);
      await expect(
        NudeNFT.connect(user1).buyNFT(1, { value: price })
      ).to.be.revertedWith("You cannot buy your own NFT");
      await expect(
        NudeNFT.connect(user2).buyNFT(1, { value: insufficientPrice })
      ).to.be.revertedWith("Insufficient gwei for purchase");
      await expect(NudeNFT.connect(user2).buyNFT(1, { value: price }))
        .to.emit(NudeNFT, "BuyNFT")
        .withArgs(1, user2.address, user1.address, price);
    });
  });
});
