// 闭包

function foo() {
  var myName = '甘总'
  let test1 = 1
  const test2 = 2
  var innerbar = {
    getName: function() {
      console.log(test1);
      return myName
    },
    setName: function(newName) {
      myName = newName
    }
  }
  return innerbar
}
var bar = foo()
bar.setName('杨宝')
bar.getName()
console.log(bar.getName());

// 闭包定义:
// 在js中 根据词法作用域规则 内部函数总是可以访问外部函数声明的变量
// 当通过一个外部函数返回一个内部函数后 即时该外部函数执行完成结束,但是
// 内部函数引用外部函数的变量依然保存在内存中,我们称这些产物是闭包的产物
// 这些变量的集合称为闭包

// 闭包如何回收
// 1. 如果引用闭包的函数是一个全局变量 那么这个闭包就会一直存在知道页面关闭
// 2. 如果引用闭包的函数是一个局部变量 等函数销毁后 在下一次js引擎执行的垃圾回收机制回收时
// 判断闭包不在使用就被回收