
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//     }, 3000)
//     async function run() {
//         await p
//         return true
//     }
//     // async 返回一个Promise
//     run().then((r) => {
//         console.log(r);
//     })
// })
//


function req(url) {
    return new Promise((resolve, reject) => {
        let img = new Image()
        img.src = url
        img.onload = function () {
            resolve(url)
        }
        img.onerror = function () {
            reject()
        }
    })
    
}
let arr = [req('https://img12.360buyimg.com/pop/s590x470_jfs/t1/123551/25/18955/90317/5fb48dfeEc54fbc44/a9d52bea957c466b.jpg.webp'),
req('https://img.alicdn.com/tfs/TB1FjZ7VWL7gK0jSZFBXXXZZpXa-520-280.png')]
Promise.race(arr).then(r => {
    console.log(r);
})