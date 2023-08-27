const hre = require("hardhat");

async function main() {
  const FanMeme = await hre.ethers.getContractFactory("FanMeme");
  const fanMeme = await FanMeme.deploy(1000000000, 18);

  await fanMeme.deployed();

  console.log("Fan Meme deployed: ", fanMeme.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});