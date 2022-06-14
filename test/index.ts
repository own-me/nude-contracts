import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

// After voting get approved, how long (seconds) does it need to execute the propose
const MIN_DELAY = 120;

// Needs total votes to pass 2% (only for testing)
const QUORUM_PERCENTAGE = 2;
// Votes will finished in 3 blocks (only for testing)
const VOTING_PERIOD = 3;
// Needs 1 block to vote after propose
const VOTING_DELAY = 1;

// test vote for function
const FUNC = "setTax";
// update to value
const NEW_TAX = 20;
// desc for proposal
const DESC = "set tax to 20%";

// vote options
// const AGAINST = 0;
const APPROVE = 1;
// const ABSTAIN = 2;
const REASON = "Just for testing";

describe("OWN ME CONTRACT TEST", function () {
  let Nude: Contract;
  let NudeNFT: Contract;
  let NudeDEX: Contract;
  let NudeTimeLock: Contract;
  let NudeGovernor: Contract;
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
    const NudeTimeLockFactory = await ethers.getContractFactory("NudeTimeLock");
    const NudeGovernorFactory = await ethers.getContractFactory("NudeGovernor");

    // Deploy contract
    Nude = await NudeFactory.deploy();
    NudeNFT = await NudeNFTFactory.deploy();
    NudeDEX = await NudeDEXFactory.deploy(Nude.address, NudeNFT.address);
    NudeTimeLock = await NudeTimeLockFactory.deploy(MIN_DELAY, [], []);
    NudeGovernor = await NudeGovernorFactory.deploy(
      Nude.address,
      NudeTimeLock.address,
      QUORUM_PERCENTAGE,
      VOTING_PERIOD,
      VOTING_DELAY
    );

    await Nude.deployed();
    await NudeNFT.deployed();
    await NudeDEX.deployed();
    await NudeTimeLock.deployed();
    await NudeGovernor.deployed();
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
    beforeEach(async () => {
      await NudeNFT.connect(user1).mintNFT(user1.address, URI);
      await Nude.connect(user2).buyTokens(price, {
        value: ethers.utils.parseEther("1"),
      });
    });
    it("Price should be greater than zero", async function () {
      await expect(
        NudeDEX.connect(user1).onSale(1, 0, user1.address)
      ).to.be.revertedWith("Price must be greater than 0");
    });
    it("Only owner can sale their nft", async function () {
      await expect(
        NudeDEX.connect(user2).onSale(1, price, user1.address)
      ).to.be.revertedWith("Not your NFT");
    });
  });

  describe("DAO features", () => {
    beforeEach(async () => {
      // Need delegate first for voting
      const transactionResponse = await Nude.delegate(deployer.address);
      await transactionResponse.wait(1);

      // get deployer's checkpoints
      console.log(
        `Checkpoints: ${await Nude.numCheckpoints(deployer.address)}`
      );

      // send user1 1000 token
      await Nude.transfer(user1.address, ethers.utils.parseEther("1000"));
      console.log(
        "addr1 balance",
        ethers.utils.formatEther(await Nude.balanceOf(user1.address))
      );
      // send user2 1000 token
      await Nude.transfer(user2.address, ethers.utils.parseEther("1000"));
      console.log(
        "addr2 balance",
        ethers.utils.formatEther(await Nude.balanceOf(user2.address))
      );

      // get deployer's balance
      console.log(
        "deployer balance",
        ethers.utils.formatEther(await Nude.balanceOf(deployer.address))
      );

      // transfer dex's ownership to timelock contract. Only timelock and call owner functions
      const transferTx = await NudeDEX.transferOwnership(NudeTimeLock.address);
      await transferTx.wait(1);

      // -------------------------------------------------- setup --------------------------------------------------
      // This is a flow for how DAO works rather than an actual test.
      const proposerRole = await NudeTimeLock.PROPOSER_ROLE();
      const executorRole = await NudeTimeLock.EXECUTOR_ROLE();
      const adminRole = await NudeTimeLock.TIMELOCK_ADMIN_ROLE();

      // assign governorContract as proposer and executor
      await NudeTimeLock.grantRole(proposerRole, NudeGovernor.address);
      await NudeTimeLock.grantRole(executorRole, NudeGovernor.address);
      // revoke deployer's admin role
      await NudeTimeLock.revokeRole(adminRole, deployer.address);
    });

    // only timelock can access dex contract
    it("can only be changed through governance", async () => {
      await expect(NudeDEX.setTax(20)).to.be.revertedWith(
        "Ownable: caller is not the owner"
      );
    });

    // common process for voting
    it("proposes, votes, waits, queues, and then executes", async () => {
      // propose for change dex's tax
      const encodedFunctionCall = NudeDEX.interface.encodeFunctionData(FUNC, [
        NEW_TAX,
      ]);

      const proposeTx = await NudeGovernor.propose(
        [NudeDEX.address],
        [0],
        [encodedFunctionCall],
        DESC
      );

      const proposeReceipt = await proposeTx.wait(1);
      const proposalId = proposeReceipt.events[0].args.proposalId;
      console.log(`Current proposalId: ${proposalId}`);

      // fetch proposal status
      let proposalState = await NudeGovernor.state(proposalId);
      console.log(`Current state1: ${proposalState} pending`);

      // after proposal is proposed, user1 cannot vote because the status is pending
      // we need 1 more block (VOTING_DELAY=1) to wait for the proposal, so we transfer add1 some more tokens
      await Nude.transfer(user1.address, ethers.utils.parseEther("1"));
      // we need 2 transactions for VOTING_DELAY=1, don't know why
      await Nude.transfer(user1.address, ethers.utils.parseEther("1"));
      proposalState = await NudeGovernor.state(proposalId);
      // proposal state should be active, we can vote now
      console.log(`Current state2: ${proposalState} active`);

      // vote for proposal
      // Against is 0, Approve is 1, Abstain is 2

      const voteTx = await NudeGovernor.castVoteWithReason(
        proposalId,
        APPROVE,
        REASON
      );
      await voteTx.wait(1);
      proposalState = await NudeGovernor.state(proposalId);
      // proposal state should still be active
      console.log(`Current state3: ${proposalState} active`);

      // we need 3 more blocks after voting starts for voting period. Let's do 4 transfers
      await Nude.transfer(user1.address, ethers.utils.parseEther("1"));
      await Nude.transfer(user1.address, ethers.utils.parseEther("1"));
      await Nude.transfer(user1.address, ethers.utils.parseEther("1"));
      await Nude.transfer(user1.address, ethers.utils.parseEther("1"));

      proposalState = await NudeGovernor.state(proposalId);
      // proposal state should success now
      console.log(`Current state4: ${proposalState} success`);

      // put vote in queue
      const descriptionHash = ethers.utils.id(DESC);
      const queueTx = await NudeGovernor.queue(
        [NudeDEX.address],
        [0],
        [encodedFunctionCall],
        descriptionHash
      );
      await queueTx.wait(1);

      await moveTime(MIN_DELAY + 1);

      await Nude.transfer(user1.address, ethers.utils.parseEther("1"));

      proposalState = await NudeGovernor.state(proposalId);
      // proposal state is not queued
      console.log(`Current state5: ${proposalState} queued`);

      // execute proposal
      const exTx = await NudeGovernor.execute(
        [NudeDEX.address],
        [0],
        [encodedFunctionCall],
        descriptionHash
      );
      await exTx.wait(1);

      proposalState = await NudeGovernor.state(proposalId);
      // proposal state is not excuted
      console.log(`Current state6: ${proposalState} executed`);

      // double check result
      console.log("New tax:", (await NudeDEX.getTax()).toString());
      expect(await NudeDEX.getTax()).to.equal(NEW_TAX);
    });
  });
});

async function moveTime(amount: number) {
  console.log("Moving Times...");
  await ethers.provider.send("evm_increaseTime", [amount]);
  console.log(`Moved forward in time ${amount} seconds`);
}
