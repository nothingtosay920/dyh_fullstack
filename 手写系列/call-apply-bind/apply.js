
Function.prototype.myApply = function (thisArg) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    // 让 this代表的函数 去到thisArg里面生效
    const fn = Symbol('fn') // 防止fn这个单词被占用
    // 把 this 代表的所拥有的参数先取到
    const args = arguments[1]

    thisArg = thisArg || window
    thisArg[fn] = this
    const result = thisArg[fn](...args)
    delete thisArg[fn]
    return result
}

function a(name, sex, args) {
    this.name = name
    this.sex = sex
    this.args = args
    console.log(name, sex, args);
}

let b = {} 
a.myApply(b, [1,2,3])