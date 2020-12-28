class EventEmitter {
  constructor () {
    // 存储事件
    this.events = this.events || new Map()
    // {
      // 'ages': function fn() {}
    // }
  }

  // 监听事件 订阅
  addListener(type, fn) {
    if (!this.events.get(type)) {
      this.events.set(type, fn)
    }
  }
  // 触发事件 发布
  emit (type) {
    let handle = this.events.get(type)
    handle.apply(this, [...arguments].slice(1))
  }
}


let emmitter = new EventEmitter()

emmitter.addListener('ages', age => {
  console.log(age);
})

emmitter.emit('ages', 18)