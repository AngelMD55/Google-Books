require("dotenv").config();

console.log("this loaded")

exports.apikey = {
    key: process.env.APIKEY
}


// console.log("OUT " + process.env.APIKEY) 
