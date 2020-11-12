function timeOut(ms) {
    return new Promise(resolve => {
        setTimeout(() =>{
            console.log('你好');
            resolve()
        })
    })
}
// 声明内部可能存在异步的情况
async函数遇到await立即执行之后
async function asyncPrint(value, ms) {
    await timeOut(ms) // 阻塞后面的代码
    console.log(value); // 去到微任务队列
}
asyncPrint('hello world', 1000)