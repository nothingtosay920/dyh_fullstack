let shallowCopy = function(obj) {
  // 只拷贝对象
  if (typeof obj !== 'object') return
  // 根据obj的类型判断是新建一个数组还是对象
  let new_obj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      new_obj[key] = obj[key]
    }
    return new_obj
  }
}