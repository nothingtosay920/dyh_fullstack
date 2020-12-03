import axios from 'axios'
const baseUrl = '';

export function get(url) {
  return function(params = {}) {
      return axios.get(baseUrl + url, {
          params
      }).then((res) => {
          const { errno, data} = res.data
          if (errno === 0) {
              return data
          }
      }).catch((err) => {
          console.log(err);
      })
  }  
}
// 跨域是浏览器造成的 为了安全设置的机制
// ip代表一个网络区域 域名相同才能做接口请求