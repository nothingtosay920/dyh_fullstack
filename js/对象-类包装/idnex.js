var person = {
    name: 'jiushen',
    age: 20,
    sex: 'boy',
    drink: function() {
        console.log('i am drinking');
        this.health++
    },
    somke: function() {
        console.log('i am smoking');
        this.health--
    },
    health: 100
}
person.somke()
person.drink()
console.log(person.health);

// 增
person.boyfriend = 'zhou'

console.log(person);

// 删
delete person.name
// 对象中没有的属性为undefined

// 对象的创建
// 1. var obj = {}
// 2. 构造函数
    //  1) 系统自带的构造函数 Object
    //  2) 自定义

// 函数中 new return 引用会影响结果

// 类包装
// 原始值是不能有属性和方法的，属性和方法是对象独有的
var num = 123
num.abc = 'aaa'
console.log(num);

var num = new Number(123)
// Number对象介于Nuber 对象 之间 参与运算变回数字 
// 字符串同理

// 原始值属性不能用但是能加上去
var num = 4
num.len = 3
// new Number(4).len = 3
// delete num.len
以上的这种隐式的过程叫做包装类