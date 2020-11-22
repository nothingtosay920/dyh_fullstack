// function foo() {
//     let person = {
//         name: 'wn',
//         age: 18
//     }
//     console.log(this);
// }

// function bar() {
//     let person = {
//         name: '蜗牛',
//         age: 20
//     }
//     foo()
// }

// bar()

// function baz() {
//     bar()
// }
// function bar() {
//     foo()
// }
// function foo() {
//     console.log(this);
// }
// baz()


// 牛哥 这里this有两种说法 一种 foo输出的是bar的this bar的this指向window
// 另一种 foo的this指向window 这里foo执行 并没有谁调用它 也就是说与环境无关 因此this指向window