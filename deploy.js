// deploy code will go here
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

// Mnemonic goes as 1st argument.
// You should put it in for example environmental variable for safety
// 2nd argument is URL fot network you're gonna connect to.
const provider = new HDWalletProvider(
  "only quiz price hen fade much snow return scheme runway execute electric",
  "https://rinkeby.infura.io/v3/64fdbcfc60834ecb9b24e95eb886f7c0"
);

const web3 = new Web3(provider);
const INITIAL_MESSAGE = "Hi, there";

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [INITIAL_MESSAGE] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();


// Attempting to deploy from account 0xDBB8dE2Ce46F880B48768a22491410a1e79b5a53
// Contract deployed to 0x04938973A545EAB17cD3402A485cF48a1F3cc771