
function Bus() {
    
}
Car.prototype = {
    // constructor: Bus
}
function Car() {

}
var car = new Car()
console.log(car.prototype); // function Car() {}
// constructor指向的是Car(),目的是让Car()
// 构造出来的对象想要找到自己的来历时能找到

// 构造函数3部曲
// new 创建this空对象 {}
// __proto__: Person.prototype this继承Person
// return this

// __proto__ 指向谁 就上谁哪里找属性
 
function Father() {
    this.name = 'zhangsan'
    this.fortune = {
        card: 'visa'
    }
}
var father = new Father()

Son.prototype = father
function Son() {
    this.hobbit = 'reading'
}

var son = new Son()
son.fortune.card2 = 'master'
console.log(father); // 原型改了 引用类型