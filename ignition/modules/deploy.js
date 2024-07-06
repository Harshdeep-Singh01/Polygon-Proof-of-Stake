const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("deploy", (m) => {
    const MyNFT = m.contract("MyNFT", []);

    return { MyNFT };
  
  });

