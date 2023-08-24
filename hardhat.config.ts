import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('./tasks/block-number')
require("hardhat-gas-reporter")

const config: HardhatUserConfig = {
  solidity: "0.8.21",
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545/',
      chainId: 31337
    }
  },
  gasReporter: {
    enabled: true
  }
};

export default config;
