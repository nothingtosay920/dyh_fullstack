// let proxy = new Proxy({}, {
//   get: function (obj, prop) {
//     console.log('get操作');
//     return obj[prop]
//   },
//   set: function (obj, prop, value) {
//     console.log('set操作');
//     obj[prop] = value
//   }
// })
// proxy.time = 35

// --------------------------------对象
// let handler = {
//   has (target, key) {
//     if (key[0] === '_') {
//       return false
//     }
//     return key in target
//   }
// }

// let target = { _prop: 'foo', prop: 'bar'}
// let proxy = new Proxy(target, handler)
// console.log('_prop' in proxy); // false

// -------------------------------------函数
// let target = function () { return 'i am the target' }
// let handler = {
//   apply: function() {
//     return 'i am the proxy'
//   }
// }
// let p = new Proxy(target, handler) // 返回的是func
// p()

// -------------------------------------
let target = {
  _bar: 'foo',
  _prop: 'bar',
  prop: 'baz'
}

let handler = {
  ownKeys (target) { // 返回数组 所有自带属性 filter会生效 但是返回的时候是全部属性
    return Reflect.ownKeys(target).filter(key => key[0] !== '_')
  }
}
let proxy = new Proxy(target, handler)
console.log(proxy);// object
for (let key of Object.keys(proxy)) {
  console.log(target[key]);
}
