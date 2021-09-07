const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { infuraProjectId, mnemonic } = require('./secrets.json');

module.exports = {
    contracts_build_directory: path.join(__dirname, "build"),
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*",
        },
        ropsten: {
            provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraProjectId}`),
            network_id: 3,
            gas: 5500000,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        },
    },
    mocha: {
    },
    compilers: {
        solc: {
            version: "^0.8.7",
        }
    },
};
