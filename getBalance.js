const getBalance = async (web3, address) => {
    console.log("Getting Balance...");
    const balance = await web3.eth.getBalance(address);
    return balance;
}

module.exports = getBalance;