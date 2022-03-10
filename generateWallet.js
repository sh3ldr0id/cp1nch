const ethers = require("ethers");

const generateWallet = () => {
    const wallet = ethers.Wallet.createRandom();

    return wallet;
}

module.exports = generateWallet;