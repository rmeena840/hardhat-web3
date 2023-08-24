import { ethers } from "hardhat";

async function main() {
  console.log("Deploying Inbox contract...")
  const Inbox = await ethers.deployContract('Inbox', ["Ravindra"]);
  await Inbox.waitForDeployment();
  console.log("Inbox contract Deployed: ", await Inbox.getAddress())
  console.log("Current msg value:", await Inbox.message());
  console.log("upadintg message...");
  await Inbox.setMessage("Ravindra Meena")
  console.log("Updated msg value:", await Inbox.message());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
