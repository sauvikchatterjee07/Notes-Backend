const mongoose = require("mongoose");

function connectToDB() {
    return new Promise((res, rej) => {
        mongoose
            .connect(process.env.DBURL + process.env.DBNAME)
            .then(() => {
                console.log("DB Connected Success");
                res();
            })
            .catch(() => {
                console.log("DB Connection Failure");
                rej();
            });
    });
}

module.exports = connectToDB;
