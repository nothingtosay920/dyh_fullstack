const fs = require('fs')
const AipOcrClient= require('baidu-aip-sdk').ocr
const APP_ID = "23082450"
const API_KEY = "H32dcvYVVSjGQXXQrrLNnmmK"
const SECRET_KEY = "ygd8XsGkN7zH8CpHmxtCcN964PXhCmSx"
const options = {}
options["muti_detect"] = "true"
// sync 同步 I/O  Async 异步 
const image = fs.readFileSync('11.jpg').toString("base64")
// console.log(image);
const client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY)

client.licensePlate(image, options).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})