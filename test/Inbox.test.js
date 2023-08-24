const { ethers } = require("hardhat");
const { assert } = require('chai')

describe('Inbox contract test', () => {
  let inbox;
  beforeEach(async () => {
    inbox = await ethers.deployContract('Inbox', ["Ravindra"])
    await inbox.waitForDeployment()
  })

  it("should get deployed", async () => {
    assert.notEqual(await inbox.getAddress(), undefined)
  })

  it("should retrieve Inbox contract initialization", async () => {
    assert.equal(await inbox.message(), "Ravindra")
  })

  it("should update Inbox contract value", async () => {
    await inbox.setMessage("Ravindra Meena")
    await inbox.waitForDeployment()
    assert.equal(await inbox.message(), "Ravindra Meena")
  })
})