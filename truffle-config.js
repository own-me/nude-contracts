const path = require("path");

module.exports = {
  contracts_build_directory: path.join(__dirname, "build"),
  networks: {
  },
  mocha: {
  },
  compilers: {
    solc: {
      version: "^0.8.2",
    }
  },
};
