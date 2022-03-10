require("dotenv").config();

const ethers = require('ethers');
const { appendFile } = require('fs');

const Web3 = require('web3');

const run = async () => {
    while (true) {
        const web3 = new Web3(process.env.RPC_URL);

        console.log("Restarting ...");

        for (let x = 0; x < 100; x++) {
            const wallet = ethers.Wallet.createRandom()

            const balance = await web3.eth.getBalance(wallet.address)

            if (balance > 0) {
                console.log(`${wallet.address} - ${balance}`)

                var data = `
address: ${wallet.address}},
mnemonic: ${wallet.mnemonic.phrase},
privateKey: ${wallet.privateKey}
balance: ${balance}
                `
                
                appendFile(
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
}

run();