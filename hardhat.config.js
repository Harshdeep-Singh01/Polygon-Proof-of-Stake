require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/7a450d4492094e3b991f70855552ddb9",
      chainId: 11155111,
      accounts: ["2383258e510adc86fa59f266948cc62a82f0335b70dff9a81dcea2f8b694a1fe"]
    },
    polygon_amoy: {
      url: "https://rpc-amoy.polygon.technology/",
      chainId: 80002,
      accounts: ["2383258e510adc86fa59f266948cc62a82f0335b70dff9a81dcea2f8b694a1fe"]
    }
  }
};
