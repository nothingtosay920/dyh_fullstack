// function a() {
//     setTimeout(() => {
//         console.log('aaa');
//     } ,1000)
// }
// function a() {
//     setTimeout(() => {
//         console.log('aaa');
//     } ,1000)
// }
// function a() {
//     setTimeout(() => {
//         console.log('aaa');
//     } ,1000)
// }
// function d() {
//     setTimeout(() => {
//         console.log('aaa');
//     } ,1000)
// }
// Promise.all([a(),b(),c()]).then(d)

Promise.race([a(),b(),c()]).then()
// 谁快走谁