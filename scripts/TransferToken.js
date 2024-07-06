const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const tokenAddress = "0x9F5e686b612170f1dF7DFa5F5d37b779D04B4C5a";
const tokenABI = tokenContractJSON.abi;
const FxERC721RootTunnel = "0x9E688939Cb5d484e401933D850207D6750852053";
const walletAddress = "0xbeeF6C777281Eb0bd39B6169243c93F392c79d74";

async function main() {

  const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const fxContract = await hre.ethers.getContractAt(fxRootContractABI, FxERC721RootTunnel);

  for (let i = 10; i <15; i++) {
    const approveTx = await tokenContract.approve(FxERC721RootTunnel, i);
    await approveTx.wait();
    console.log('Approval confirmed');

    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, i, "0x6556");
    await depositTx.wait();
    console.log("Tokens deposited");
  }
}

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });