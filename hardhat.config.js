require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/process.env.INFURA_API_KEY",
      chainId: 11155111,
      accounts: [process.env.PRIVATE_KEY]
    },
    polygon_amoy: {
      url: "https://rpc-amoy.polygon.technology/",
      chainId: 80002,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
