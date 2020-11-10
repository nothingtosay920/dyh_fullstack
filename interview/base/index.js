let key1 = 1  // symbol(1)
let key2 = 1  // symbol(1) 
console.log(key1 === key2);  // false
// 唯一值

// console.log('hello'.length); 研究一下

const a = [] // #001
const b = a // 指针的复制

function test(person) {
    person.age = 26
    person = {
        name: 'yyy',
        age: 30 
    }
    return person
}

const p1 = {
    name: 'xxx',
    age: 25
}
const p2 = text(p1)
console.log(p1)  
// 函数传参是给指针的复制

console.log(typeof NaN);

// 让instaceof也能判断原始类型
class PrimitvString {
    // 静态方法 让我们自定义instanceof
    static [Symbol.hasInstance](x) {
        return typeof x === 'string'
    }
}

console.log('hellp' instanceof PrimitvString);