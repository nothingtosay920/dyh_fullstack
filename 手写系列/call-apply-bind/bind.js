let b = {
    name: '宜豪'
}

function a(e, r) {
    console.log(e + r);
    console.log(this.name);
}


a.bind(b, 4, 5)()

Function.prototype.myBind() = function (thisArg) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    const args = [...arguments].slice(1) // ['b', '1', '2']
    const self = this
    const nop = function () {}
    // 绑定函数的操作
    const bound = function () {
        return self.apply(
            this instanceof nop ? this : thisArg ,
            args
        )
    }
    if (this.prototype) {
        nop.prototype = this.prototype
    }
    bound.prototype = new nop()
    const fn = Symbol('fn') // 防止fn这个单词被占用
    // 把 this 代表的所拥有的参数先取到

}