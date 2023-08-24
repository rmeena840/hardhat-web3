import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('./tasks/block-number')

const config: HardhatUserConfig = {
  solidity: "0.8.21",
};

export default config;
