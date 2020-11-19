

const { log } = require("console");
const fs = require("fs");
const { resolve } = require("path");
fs.readFile('./1.html', 'utf-8', (err, file) => {
    console.log(file)
})

// 包装一层Promise

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('开始打印');
        resolve()
    }, 1000)
}).then(res => {
    fs.readFile('./1.html', 'utf-8', (err, file) => {
        console.log(file)
    })
})

let p =  (url) => new Promise((resolve, reject) => {
    fs.readFile(url, 'utf-8', (err, file) => {
        if (err) {
            reject()
        }else {
            resolve(file)
        }
    })
})
// p('./1.html').then((file) => {
//     console.log(file);
// })
// p('./a.html').then((file) => {
//     console.log(file);
// })
p('./1.html').then((c1) => {
   return p('./a.html')
}).then((c2) => {
    
})