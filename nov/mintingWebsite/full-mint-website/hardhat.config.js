require("@nomicfoundation/hardhat-toolbox");
const dotenv = require( "dotenv");

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
    },
  goerli: {
    url:process.env.REACT_APP_GOERLI_RPC_URL,
    //accounts:[process.env.REACT_APP_GOERLI_RPC_URL],
    accounts:[`0x${process.env.REACT_APP_GOERLI_RPC_URL}`],
    chainId: 5,
  },
  },
  etherscan:{
    apiKey:process.env.REACT_APP_ETHERSCAN_API_KEY,
  }
};
