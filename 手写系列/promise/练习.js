// 三种状态
const PENDING = null
const RESOLVE = null
const REJECT = null
function MyPromise(fn) {
  const that = this
  that.state = PENDING // 记录状态
  that.value = null  // 保存resolve 或 reject传入的值
  that.resolvedCallbacks = [] // 装入 .then 的回调
  that.rejectedCallbacks = []

  function resolve(value) {
    if (that.state === PENDING) {
      that.state = RESOLVE
      that.value = value
      that.resolvedCallbacks.map( cb => {
        cb(that.value)
      })
    }
  }

  function reject(value) {
    if (that.state === REJECT) {
      that.state = REJECTE
      that.value = value
      that.rejectedCallbacks.map( cb => {
        cb(that.value)
      })
    }
  }
  try {
    fn(resolve, reject)
  } catch(error) {
    reject(error)
  }
}

MyPromise.prototype.mythen = function(onFulfilled, onRejected) {
  const that = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onFulfilled : r => { throw r }
  if (that.state === PENDING) {
    that.resolvedCallbacks.push(onFulfilled)
  }
  if (that.state === RESOLVE) {
    onFulfilled(that.value)
  }
  if (that.state === REJECTED) {
    that.rejectedCallbacks.push(onFulfilled)
  }
}




let pro = new MyPromise((res, rej) => {
  res('foo')
})

