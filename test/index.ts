import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

describe("OWN ME CONTRACT TEST", function () {
  let Nude: Contract;
  let NudeNFT: Contract;
  let NudeDEX: Contract;
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
    const NudeDEXFactory = await ethers.getContractFactory("NudeDEX");
    // Deploy contract
    Nude = await NudeFactory.deploy();
    NudeNFT = await NudeNFTFactory.deploy();
    NudeDEX = await NudeDEXFactory.deploy(Nude.address, NudeNFT.address);
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

  describe("Buy tokens", () => {
    it("Buy tokens fail cases", async function () {
      await expect(
        Nude.connect(user1).buyTokens(10, {
          value: ethers.utils.parseEther("0.1"),
        })
      ).to.be.revertedWith("Not exact amount");
    });
    it("Should buy tokens", async function () {
      await Nude.connect(user1).buyTokens(10, {
        value: ethers.utils.parseEther("1"),
      });
      expect(await Nude.balanceOf(user1.address)).to.equal(10);
    });
  });

  describe("Mint NFTs", () => {
    it("MintNFT should emit event", async function () {
      expect(await NudeNFT.mintNFT(user1.address, URI))
        .to.emit(NudeNFT, "MintNFT")
        .withArgs(user1.address, 1, URI);
    });
  });

  describe("DEX features", () => {
    const price = 10;
    const tokenRate = 0.1;
    const tax = 1;
    beforeEach(async () => {
      await NudeNFT.connect(user1).mintNFT(user1.address, URI);
      await Nude.connect(user2).buyTokens(price, {
        value: ethers.utils.parseEther("1"),
      });
    });
    it("Price should be greater than zero", async function () {
      await expect(NudeDEX.connect(user1).onSale(1, 0)).to.be.revertedWith(
        "Price must be greater than 0"
      );
    });
    it("Only owner can sale their nft", async function () {
      await expect(NudeDEX.connect(user2).onSale(1, price)).to.be.revertedWith(
        "Not your NFT"
      );
    });
    it("Owner need Nude tokens for selling NFT on DEX", async function () {
      await expect(NudeDEX.connect(user1).onSale(1, price)).to.be.revertedWith(
        "Not enough tokens for tax"
      );
    });
    it("Owner can sale nft on DEX", async function () {
      await Nude.connect(user1).buyTokens(tax, {
        value: ethers.utils.parseEther((tax * tokenRate).toString()),
      });
      await NudeNFT.connect(user1).approve(NudeDEX.address, 1);
      await Nude.connect(user1).approve(NudeDEX.address, tax);
      await NudeDEX.connect(user1).onSale(1, price);
      expect(await NudeNFT.ownerOf(1)).to.equal(NudeDEX.address);
      expect(await Nude.balanceOf(NudeDEX.address)).to.equal(tax);
    });
    it("Owner can withdraw nft on DEX", async function () {
      await Nude.connect(user1).buyTokens(tax, {
        value: ethers.utils.parseEther((tax * tokenRate).toString()),
      });
      await NudeNFT.connect(user1).approve(NudeDEX.address, 1);
      await Nude.connect(user1).approve(NudeDEX.address, tax);
      await NudeDEX.connect(user1).onSale(1, price);
      await NudeDEX.connect(user1).takeDown(1);
      expect(await NudeNFT.ownerOf(1)).to.equal(user1.address);
    });
    it("User can not withdraw others NFT", async function () {
      await Nude.connect(user1).buyTokens(tax, {
        value: ethers.utils.parseEther((tax * tokenRate).toString()),
      });
      await NudeNFT.connect(user1).approve(NudeDEX.address, 1);
      await Nude.connect(user1).approve(NudeDEX.address, tax);
      await NudeDEX.connect(user1).onSale(1, price);
      await expect(NudeDEX.connect(user2).takeDown(1)).to.be.revertedWith(
        "Not your NFT"
      );
    });
    it("User can not withdraw NFT does not on sale", async function () {
      await expect(NudeDEX.connect(user1).takeDown(1)).to.be.revertedWith(
        "NFT not on sale"
      );
    });
    it("User can buy others nft", async function () {
      await Nude.connect(user1).buyTokens(tax, {
        value: ethers.utils.parseEther((tax * tokenRate).toString()),
      });
      await Nude.connect(user1).approve(NudeDEX.address, tax);
      await NudeNFT.connect(user1).approve(NudeDEX.address, 1);
      await NudeDEX.connect(user1).onSale(1, price);
      await Nude.connect(user2).buyTokens(tax, {
        value: ethers.utils.parseEther((tax * tokenRate).toString()),
      });
      await Nude.connect(user2).approve(NudeDEX.address, tax + price);
      await NudeDEX.connect(user2).trade(1);
      expect(await NudeNFT.ownerOf(1)).to.equal(user2.address);
      expect(await Nude.balanceOf(user1.address)).to.equal(price);
    });
  });
  // todo: fail cases for trade function
});
