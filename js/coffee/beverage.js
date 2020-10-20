var Beverage = function() {

}

Beverage.prototype.boilWater = function() {
    console.log('把水煮沸')
}
// 冲泡空的方法
Beverage.prototype.brew = function() {
    console.log('把水煮沸')
}
// 冲泡 倒进杯子
Beverage.prototype.pureInCup = function() {
    console.log('把水煮沸')
}

Beverage.prototype.addCondiments = function() {
    console.log('把水煮沸')
}

Beverage.prototype.init = function() {
    this.brew();
    this.pureInCup();
    this.boilWater();
    this.addCondiments();
}
var Coffee = function() {}
Coffee.prototype =  Beverage.prototype
var oneCoffee = new Coffee(); 
console.log(oneCoffee.init())


