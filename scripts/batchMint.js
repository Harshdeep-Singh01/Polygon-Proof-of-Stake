async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    const MyNFT = await ethers.getContractFactory("MyNFT");
  
    const myNFT = await MyNFT.attach("0x9F5e686b612170f1dF7DFa5F5d37b779D04B4C5a"); 
  
  
    const tokenURIs = [
      "ipfs://QmXPkjz6y5fRynzoSS11A4ZRJEvM3xP9o46U4hQzveHT4x",
      "ipfs://QmchhN5DtiZB9tN4UobgE7Z3GKdWpS62zTfBEenD4vD46J",
      "ipfs://QmegeKbxXtgwCqpp5HJX7kpvCXDmM1E99DYGWQt7vGQYAz",
      "ipfs://QmXPe7TMVxhnTAzePLk44nH1Zd4qXgioT3XPdeUAVYvXDt",
      "ipfs://QmdRjwsjs7Y28giJSjBGkE5TZ4pr3BsgmKfq7XsKSCfebb",
    ];
  
    const prompts = [
        "3d style aliens launching war on humans",
        "3d style indian city",
        "3d style my future wife",
      "3d style Punjab",
      "3d style sikh warrior",
    ];
  
    const tx = await myNFT.createNFTs(tokenURIs, prompts);
    console.log("Transaction sent:", tx.hash);
  
    await tx.wait();
    console.log("Batch minting completed");
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  