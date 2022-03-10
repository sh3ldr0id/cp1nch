require("dotenv").config();

const { appendFile } = require("fs");

const addEntry = data => {
    appendFile(process.env.FILENAME, data, (error) => {
        if (error) {
            console.log(error);
        }
    });
}

module.exports = addEntry;