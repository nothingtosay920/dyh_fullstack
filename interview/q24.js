var c = function f() {}
var a = f.prototype
var b = Object.getPrototypeOf(f) // __proto__

a === b