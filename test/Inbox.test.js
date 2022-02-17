// contract test code will go here
const assert = require("assert");
// ganache is a local test blockchain network
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());

let accounts;

beforeEach(async () => {
  // Get list of all accounts
  accounts = await web3.eth.getAccounts();
  // Use one of the accounts to deploy the contract
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(accounts);
  });
});
