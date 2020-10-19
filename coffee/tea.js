// 1. 把水煮开
// 2. 用沸水浸泡茶叶
// 3. 把茶水倒进杯子
// 4. 加柠檬

var tea = function(type) {
    this.type = type
}

tea.prototype.boilWater = function() {
    console.log('把水煮开')
}
tea.prototype.brewCoffeeGriends = function() {
    console.log('用沸水浸泡茶叶')
}
tea.prototype.pureInCup = function() {
    console.log('把茶水倒进杯子')
}
tea.prototype.addSugarAndMilk = function() {
    console.log('加柠檬')
}
tea.prototype.init = function() {
    this.boilWater();
    this.brewCoffeeGriends();
    this.pureInCup();
    this.addSugarAndMilk();
}