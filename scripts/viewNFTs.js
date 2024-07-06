const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const MyNFT = await ethers.getContractFactory("MyNFT");
  const myNFT = MyNFT.attach("0x9F5e686b612170f1dF7DFa5F5d37b779D04B4C5a"); // Replace with your contract address

  const totalMinted = await myNFT.totalSupply();
  console.log("Total NFTs minted:", totalMinted.toString());

  for (let i = 0; i < totalMinted; i++) {
    const tokenId = i;
    const tokenURI = await myNFT.tokenURI(tokenId);
    const promptDescription = await myNFT.promptDescription(tokenId);
    console.log(`Token ID: ${tokenId}, Token URI: ${tokenURI}, Prompt: ${promptDescription}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
