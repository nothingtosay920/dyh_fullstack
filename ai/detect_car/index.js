const fs = require('fs')
const AipImageClassifyClient = require('baidu-aip-sdk').imageClassify
const APP_ID = "23082450"
const API_KEY = "H32dcvYVVSjGQXXQrrLNnmmK"
const SECRET_KEY = "ygd8XsGkN7zH8CpHmxtCcN964PXhCmSx"

// sync 同步 I/O  Async 异步 
const image = fs.readFileSync('55.jpg').toString("base64")
// console.log(image);
const client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY)

// http 协议层
// 云端 AI sdk
client.carDetect(image).then((res) => {
    console.log(res.result[0]);
}).catch(err => {
    console.log(err);
})


