var obj = {

}

Object.create() 
// 凭空创建一个对象 3
// 把另外一个对象当做原型传进来(继承)

var obj = {
    name: 'wn',
    age: 18
}

var obj1 = Object.create(obj)


// 面试题
// 所有对象最终都会继承 Object.prototype  ??错的
var obj = Object.create(null) // => undefined


var num = 123


// => var num = new Number(123) Number对象
// 方法重写
Number.prototype.toString = function () {
    return 'hehe'
}
num.toString()

// Number.prototype.__proto__ = Object.prototype
var str = 'hello' // new String('hello')
console.log(str.length);

Object.prototype.toString = function () {
    personalbar.prototype.toString = function () {
        return 'hehe'
    }
}

function Person() {
}
var person = new Person()
console.log(person.toString());