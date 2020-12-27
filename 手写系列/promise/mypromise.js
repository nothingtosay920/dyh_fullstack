const PENDING = 'pending'
const RESLOVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const that = this
  that.state = PENDING // 记录状态
  that.value = null  // 保存resolve 或 reject传入的值
  that.resolvedCallbacks = [] // 装入 .then 的回调
  that.rejectedCallbacks = []

  function resolve(value) {
    if (that.state === PENDING) {
      that.state = RESLOVED
      that.value = value
      that.resolvedCallbacks.map(cb => {
        cb(that.value)
      })
    }
  }

  function reject(value) {
    if (that.state === PENDING) {
      that.state = REJECTED
      that.value = value
      that.rejectedCallbacks.map(cb => {
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

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const that = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onFulfilled : r => { throw r }

  if ( that.state === PENDING ) {
    that.resolvedCallbacks.push(onFulfilled)
  }

  if (that.state === RESLOVED) {
    onFulfilled(that.value)
  }
  if ( that.state === PENDING ) {
    that.resolvedCallbacks.push(onRejected)
  }

  if (that.state === REJECTED) {
    onRejected(that.value)
  }
}




// 只有第1个 .then 要依赖于Promise的状态 后面会报持