// contract test code
const assert = require("assert");
// ganache is a local test blockchain network
const ganache = require("ganache-cli");
const { from } = require("memorystream");
const Web3 = require("web3");
const { interface, bytecode } = require("../compile");

const web3 = new Web3(ganache.provider());

let accounts;
let inbox;
const INITIAL_MESSAGE = "Hi, there!";

beforeEach(async () => {
  // Get list of all accounts
  accounts = await web3.eth.getAccounts();
  // Use one of the accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: [INITIAL_MESSAGE],
    })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    assert.ok(inbox.options.address);
  });

  it("has a default message", async () => {
    // it's message() -with parentesis because you may pass arguments there;
    // and thene there is call() where you can specify transaction details as param
    //(who pays for transaction and max gas).
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_MESSAGE);
  });
});
