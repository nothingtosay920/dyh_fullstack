let a = {
    age: 1,
    info: {
        name: 'wn'
    }
}
let b = JSON.parse(JSON.stringify(a)) // 把JSON字符串转为JSON对象
// 深拷贝方法
// 缺陷无法拷贝undefined属性和Symbol
// 无法序列化函数 不能解决循环引用的对象
// 如：
// let obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: 3
//     }
// }
// obj.c = obj.b
// obj.e = obj.a
// obj.b.c = obj.c
// obj.b.d = obj.b




let b = Object.assign({}, a)
// 当对象中有引用类型时，assign只是复制的指针 而不是再开辟空间
// 浅拷贝方法

let c = {
    age: 1,
    jobs: {
        firest: 'coding'
    }
}
let d = {...c} // 把c里所有的属性 解构出来放到一个新对象中
c.age = 2
console.log(d.age);
// 特例 浅拷贝实现深拷贝
c.jobs.firest = 'waiter'
console.log(d.jobs.firest);
// 浅拷贝方法