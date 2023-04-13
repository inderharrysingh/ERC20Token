
const { ethers, artifacts } = require("hardhat");

async function main(){
    const receiver = (process.argv[5]).toString();
    const value  = (process.argv[3]).toString();

    console.log(receiver);
    console.log(value);

    const contractAddress = "0xD8c18c2C0639E804Ba7EdBad964Bf6a4bC374f02";
    const contractAbi = artifacts.readArtifactSync("InderToken").abi;

    const Token = await ethers.getContractAt(contractAbi, contractAddress);


    const token = await Token.transfer( receiver, ethers.utils.parseEther(value));

    console.log(`Successfully sent ${value} Tokens to ${receiver} --> Contract Address ${token.address}`);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });