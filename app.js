require("dotenv").config();

const ethers = require('ethers');
const { appendFile } = require('fs');

const Web3 = require('web3');

const web3 = new Web3(process.env.INFURA_URL);

const run = async () => {
    while (true) {
        const wallet = ethers.Wallet.createRandom()

        const balance = await web3.eth.getBalance(wallet.address)

        if (balance >= 0) {
            console.log(`${wallet.address} - ${balance}`)

            var data = `
address: ${wallet.address}},
mnemonic: ${wallet.mnemonic.phrase},
privateKey: ${wallet.privateKey}
balance: ${balance}
            `
            
            await appendFile(
                process.env.FILENAME, 
                data, 
                error => {
                    if (error) {
                        console.log(error);
                    }
                }
            )
        }
        
        
    }
}

run();