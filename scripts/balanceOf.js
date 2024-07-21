const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const tokenAddress = "0x52CaeB15CA9ea68FCe507FAef7367C9871D18a91"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xbeeF6C777281Eb0bd39B6169243c93F392c79d74";

async function main() {
  try {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const balance = await token.balanceOf(walletAddress);
    console.log(`You now have: ${balance} NFTs in your wallet`);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

main();
