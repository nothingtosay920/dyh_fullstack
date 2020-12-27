let obj = {}
Object.defineProperty(obj, 'num', {
  enumerable: true,
  configurable: true,
  // 数据描述符
  value: 1,
  writable: true,

  // getter 和 setter 定义的属性叫 存储器
  // 存取描述符
  // getter
  get: undefined, // 如果没有getter 就是undefined
  // setter 没有setter 就是undefined
  set: undefined
})
obj.num = 1

delete obj.num
console.log(obj);

const ob = {
  val: 1,
  eat: function () {

  }
}