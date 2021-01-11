// ASYNC/AWAIT 的原理是什么  把下面代码翻译成promise
function getJSON () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(2);
      resolve(2)

    }, 2000)
  })
}
// 缺陷没有错误捕捉机制
// async function testAsync () {
//   try {
//     await getJSON()
//   } catch (error) {
//     console.log(error);
//   }
//   console.log(3);
// }

async function testAsync () {
    let data = await getJSON()
    console.log(3);
    console.log(data);
  }



let result = testAsync()
console.log(result); // Promise

// 1. async 函数在声明形式上 与普通函数没有区别 函数声明 函数表达式 对象的方法
// class方法 都可以声明成async函数
// 2. 任何一个await语句后面的Promise对象变成reject状态 那么 整个async函数都会中断
// 3. async函数返回promise对象 必须等到内部所有的await命令后面的promise对象执行完
// 才会发生状态改变 除非遇到return语句或者抛出错误

function testAsync () {
  return Promise.resolve().then(() => {
    // await getJSON()  getJSON执行 且返回promise
    return getJSON()


  }).then(() => {
    console.log(3);
  })
}