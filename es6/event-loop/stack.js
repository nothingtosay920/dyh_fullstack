function foo(b) {
    var a = 5;
    return a * b + 10;
}
function bar(x) {
    var y = 3;
    return foo(x * y)
}
bar(2)
// 本身有个执行栈 把代码给执行栈
// bar执行 function bar进入执行栈
// 字节面试
async function async1() {
    console.log('async1 start');
    await async2();
    // console.log('async1 end');
}
async function async2() {
    console.log('async2 start');
    return new Promise((resolve, reject) => {
        resolve();
        console.log('async2 promise');
    })
}
console.log('script start');
setTimeout(function () {
    console.log('setTimeout');
}, 0); // 宏
async1();
new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2'); // 微
}).then(function () {
    console.log('promise3'); // 微
});
console.log('script end');

// script start
// async1 start
// async2 start
// async2 promise
// promise1
// script end
// promise2
// promise3
// setTimeout

//     console.log(1);
//    function a() {
//        return new Promise(() => {
//            console.log(123);
//            setTimeout(()=>{
//                console.log(333);
//            })
//        })
//    }
//    a()
//    console.log(2);
//    a()
// 1 7 3 2 5 6 4
console.log(1);
async function bar() {
    await fn() // 立即执行
    console.log(6); // 去到微任务队列
}
function fn() {
    console.log(7);
}
function foo() {
    return new Promise((resolve) => {
        console.log(2);
        resolve()
    })
}
bar()
console.log(3);

foo().then(() => {
    console.log(4);
})
console.log(5);