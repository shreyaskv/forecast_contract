// /**
// * @type import('hardhat/config').HardhatUserConfig
// */

// require('dotenv').config();
// require("@nomiclabs/hardhat-ethers");

// // const { API_URL, PRIVATE_KEY } = process.env;

// // module.exports = {
// //    solidity: "0.8.11",
// //    defaultNetwork: "volta",
// //    networks: {
// //       hardhat: {},
// //       volta: {
// //          url: API_URL,
// //          accounts: [`0x${PRIVATE_KEY}`],
// //          gasPrice: 1,
// //       }
// //    },
// // }
// const { ethers } = require("ethers");
// module.exports = {
//   solidity: "0.8.11",
//   networks: {
//     hardhat: {
//       // configuration for the hardhat network
//     },
//     volta: {
//       url: process.env.API_URL, // Make sure this is correct
//       accounts: [process.env.PRIVATE_KEY].filter(Boolean), // Ensure the private key is correct and prefixed with 0x
//       gasPrice: ethers.utils.parseUnits('5', 'gwei').toString(), // Adjust gas price as necessary
//     },
//   },
// };

// require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");

// require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.11",
  mocha: {
    timeout : 100000000
  },
  networks: {
    hardhat: {
      blockGasLimit: 10000000,
    },
    mis385n:{
      url : "http://54.146.235.138:8546",
      accounts: ["387834e4d8d6b3ad8da8df3a0ed2c5fb28f3ecf8a0f46ed9918085daae06b9f5"],
      chainId : 385000,
    }
  },
};

