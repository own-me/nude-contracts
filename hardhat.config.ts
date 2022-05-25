import * as dotenv from "dotenv";

import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

module.exports = {
  solidity: "0.8.14",
  defaultNetwork: "mumbai",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
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
    apiKey: {
      mumbai: process.env.POLYSCAN_API_KEY || "",
    },
  },
};
