// let xhr = new XMLHttpRequest()
// // 原生js
// // 初始化
// // xhr.open(method, url, async)
// xhr.open('get', 'https://api.github.com/users/github', async)
// // 发送请求
// xhr.send(data)
// // 状态变更
// // 设置状态变化回调处理请求结果
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     console.log(xhr.responseText);
//   }
// }


// 基于promise 实现ajax
function ajax(options) {
  let url = options.url
  const method = options.method.toLowerCase() || 'get'
  const async = options.async
  const data = options.data
  let xhr = new XMLHttpRequest()
  if (options.timeout && options.timeout > 0) {
    xhr.timeout = options.timeout
  }

  return new Promise((resolve, reject) => {
    xhr.ontimeout = () => reject && reject('请求超时')
    // 监听状态的变化回调
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
          resolve && resolve(xhr.responseText)
        } else {
          reject && reject()
        }
      }
    }
    // 错误的回调
    xhr.onerror = err => reject && reject(err)

    // 处理请求
    let paramArr = []
    let encodeData // 参数编译
    if (data instanceof Object) {
      for (let key in data) {
        paramArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data))
      }
      encodeData = paramArr.join('&')
    }

    // get 参数拼接
    if (method === 'get') {
      let index = url.indexOf('?')
      if (index === -1) {
        url += '?'
      } else if (index !== url.length - 1) {
        url += '&'
      }
      url += encodeData
    }
    xhr.open(method, url, async)
    if (method === 'get') {
      xhr.send(null)
    } else {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
      xhr.send(encodeData)
    }
  })
}

ajax({
  method: 'get',
  url: '',
  async: true,
  data: {},
  timeout: 10000
})