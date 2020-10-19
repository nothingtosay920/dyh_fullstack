// talk in js
// 一杯咖啡
// es5 类 大写的函数

// 1. 把水煮开
// 2. 用沸水冲泡咖啡
// 3. 把咖啡倒进杯子
// 4. 加糖和牛奶

// 构造函数constructor
// 给一个类添加方法，在原型链上添加，
// 这样new（创建实例）的时候就能够让实例有这个方法

// 类 抽象的
// 实例化 对象
// 封装类的人 调用的人 是两拨人
// 精粹第10章
var Coffee = function(type) {
    this.type = type
}
// 原型
Coffee.prototype.boilWater = function() {
    console.log('把水煮开');
}
Coffee.prototype.brewCoffeeGriends = function() {
    console.log('用沸水冲泡咖啡')
}
Coffee.prototype.pureInCup = function() {
    console.log('把咖啡倒进杯子里')
}
Coffee.prototype.addSugarAndMilk = function() {
    console.log('加糖和牛奶')
}
Coffee.prototype.init = function() {
    // this.boilWater();
    // this.brewCoffeeGriends();
    // this.addSugarAndMilk();
    // this.pureInCup();
}
 var oneCoffee = new Coffee("猫屎咖啡");
//  console.log(oneCoffee.type)
//  console.log(oneCoffee.__proto__ == Coffee.prototype)
 console.log(oneCoffee.init())
//  class
//  阮一峰 1继承
//  js 类 怎么构建起来的 = 火车头 构造函数(首字母大写)
// 好多节车厢 prototype
//  构造函数和普通函数的区别  new
// 函数是一等对象
// JS本没有类，
// 只有对象    new 对象生成对象 在内存中构建空对象{} this会指向实例
// 任何函数都有一个prototype属性
// 原型链

// console.log(Coffee.prototype.constructor == Coffee)
// console.log(Coffee.prototype)
// console.log(Coffee)
// console.log(oneCoffee.__proto__)
// console.log(oneCoffee.prototype)
// console.log(oneCoffee.prototype.constructor)  // undefined