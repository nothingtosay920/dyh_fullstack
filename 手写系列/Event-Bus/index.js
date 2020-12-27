class EventEmitter {
  constructor () {
    // 存储事件
    this.events = this.events || new Map()
  }

  // 监听事件
  addListener() {

  }
  // 触发事件
  emit (type) {
    let handle = this.events.get(type)
  }
}


let emmitter = new EventEmitter()

emmitter.addListener('ages', age => {
  console.log(age);
})

emmitter.emit('ages', 18)