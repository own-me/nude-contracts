import * as dotenv from "dotenv";

import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

module.exports = {
  solidity: "0.8.11",
  defaultNetwork: "polygonMumbai",
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts: {
        mnemonic: process.env.MNEMONIC || "",
      },
    },
    polygonMumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: {
        mnemonic: process.env.MNEMONIC || "",
      },
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.MUMBAI_ETHERSCAN_API_KEY || "",
    // hack until fixed in hardhat
    // apiKey: {
    //   ropsten: process.env.ROPSTEN_ETHERSCAN_API_KEY || "",
    //   polygonMumbai: process.env.MUMBAI_ETHERSCAN_API_KEY || "",
    // },
  },
};
