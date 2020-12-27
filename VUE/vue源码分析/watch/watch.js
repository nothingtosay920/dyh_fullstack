// 能独立监听某个数据的变化
// 提供可执行函数的场所

class watcher {
  constructor (options) {
    this.$data = this.getBaseType(options.data) === 'Object' ? options.data : {}
    this.$watch = this.getBaseType(options.watch) === 'object' ? options.watch : {} 
    for(let key in options.data) {
      this.setData(key)
    }
  }
  getBaseType(target) {
    const typeStr = Object.prototype.toString.call(target)
    return typeStr.slice(8, -1)
  }
  setData(_key) {
    Object.defineProperty(this, _key, { // Object.defineProperty(this) 把上下文指向当前对象
      get: function () {
        return this.$data[_key]
      },
      set: function (newVal) {
        const oldVal = this.$data[_key]
        if (newVal == oldVal) return newVal
        this.$data[_key] = newVal
        // 调用options里面的watch 里面的函数
        this.$watch[_key] && this.getBaseType(this.$watch[_key] === 'Function') && (
          this.$watch[_key].call(this, newVal, oldVal) // 保证this
        )
      }
    })
  }
}

let vm = new watcher({
  data: {
    a: 0,
    b: 'hello'
  },
  watch: {
    a (newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  },
})
vm.a = 1