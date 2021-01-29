var a = {}
var b = Object.prototype

a.prototype === b // false
Object.getPrototypeOf(a) == b // __proto__ true

// 对象没有prototype