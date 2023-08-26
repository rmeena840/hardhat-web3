import { network } from "hardhat";
import { developmentChain } from "../helper-hardhat-config"

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    if (chainId === 31337) {
        log("Local network detected! Deploying mocks...")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            args: [8, 200000000000],
            log: true,
        })
        log("mock deployed")
        log("--------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
