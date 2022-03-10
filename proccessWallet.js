const processWallet = (wallet, balance) => {
    const data = `
address: ${wallet.address},
mnemonic: ${wallet.mnemonic.phrase},
privateKey: ${wallet.privateKey}
balance: ${balance}
    `;
    return data;
}

module.exports = processWallet;