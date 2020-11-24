
Function.prototype.myCall = function (thisArg) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    // 让 this代表的函数 去到thisArg里面生效
    const fn = Symbol('fn') // 防止fn这个单词被占用
    // 把 this 代表的所拥有的参数先取到
    const args = [...arguments].slice(1) // ['b', '1', '2']
    thisArg = thisArg || window

    // 将调用call函数的方法添加到thisArg的属性中
    thisArg[fn] = this
    const result = thisArg[fn](...args)
    delete thisArg[fn]
    return result
}

