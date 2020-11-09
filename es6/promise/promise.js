// Promise.prototype.then() = function() {}
// Promise.prototype.catch() = function() {}
// class Promise {
//     constructor() {

//     }
// }

function xq() {
    // promis有两种状态 
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('相亲');
            resolve('win')
            reject('TAT')
        }, 1000)
    })
}

function marry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(123);
            resolve('入')
        }, 500)
    })
}
function baby() {
    console.log(123214);
}
xq().then((res) => {
    console.log(res);
    marry().then((result) => {
        console.log(result);
        baby()
    })
}).catch((err) => {
    console.log(err);
})