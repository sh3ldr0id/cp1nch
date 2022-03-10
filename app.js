require("dotenv").config();

const Web3 = require("web3");

const generateWallet = require("./generateWallet");
const getBalance = require("./getBalance");
const addEntry = require("./addEntry");
const proccessWallet = require("./proccessWallet");

const run = async () => {
    while (true) {
        try {
            const web3 = new Web3(process.env.RPC_URL);

            console.log("Connected");
            
            while (true) {
                try {
                    const wallet = generateWallet();

                    console.log("Wallet Generated !")
                    
                    const balance = await getBalance(web3, wallet.address);

                    if (balance >= 0) {
                        const proccessedWallet = proccessWallet(wallet, balance);

                        addEntry(proccessedWallet);

                        console.log(proccessedWallet)
                    }
                } catch (error) {
                    console.log(error);
                    console.log("Restarting...");
                    break;
                }
            }
        } catch (error) {
            console.log(error);
            console.log("Restarting...");
        }
    }
};

run();
