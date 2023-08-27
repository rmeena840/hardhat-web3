import { deployments, ethers, getNamedAccounts } from "hardhat";
import { FundMe, MockV3Aggregator } from "../typechain-types";
import { assert, expect } from "chai";

describe("FundMe Contract", async function () {
    let deployer: string;
    let fundMe: FundMe;
    let mockV3Aggregator: MockV3Aggregator;

    beforeEach(async function () {
        deployer = (await getNamedAccounts()).deployer
        await deployments.fixture(["all"]);
        fundMe = await ethers.getContractAt("FundMe", deployer)
        mockV3Aggregator = await ethers.getContractAt("MockV3Aggregator", deployer)
    })

    it("should set aggregator addresses correctly", async function () {
        const response = await fundMe.getAddress();
        assert.equal(await mockV3Aggregator.getAddress(), response)
    })

    it("should fail when if enough fund is not sent", async function () {
        const eth = ethers.parseEther("1")
        await expect(fundMe.fund()).to.be.revertedWith(
            "You need to spend more ETH!"
        )
    })

    it("should not fail if enough fund is sent", async () => {
        const eth = ethers.parseEther("1")
        await fundMe.fund({ value: eth })
        const response = await fundMe.getAddressToAmountFunded(
            deployer
        )
        assert.equal(response.toString(), eth.toString())
    })

    it("Adds funder to array of funders", async () => {
        const eth = ethers.parseEther("1")
        await fundMe.fund({ value: eth })
        const response = await fundMe.getFunder(0)
        assert.equal(response, deployer)
    })
})