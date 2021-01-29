function foo() {}

var oldName = foo.name
foo.name = 'bar' // 函数名禁止被修改的
console.log(oldname, foo.name);