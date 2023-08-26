import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "./tasks/block-number";
import "hardhat-gas-reporter";
import "@typechain/hardhat"
import "hardhat-deploy"

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.21" }, { version: "0.6.6" }]
  },
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545/',
      chainId: 31337
    }
  },
  gasReporter: {
    enabled: true
  },
  namedAccounts: {
    deployer: {
      default: 0
    }
  }
};

export default config;
