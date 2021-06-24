const superagent = require('superagent')
const api = 'https://movie.douban.com/j/search_subjects'

// common.js CMD es6
module.exports = (pageStart) => {
  // XMLHttpRequest axios
  // 前端用的时候 XMLHttpRequest window
  // js兼容性 浏览器嗅探模式
  return new Promise((resolve, reject) => {
    superagent.get(api).query({
      pageStart,
      'type': 'tv',
      'tag': '日本动画',
      'sort': 'recommend',
      'page_limit': 20
    }).type('form').accept('application/json').end((err, res) => {
      if (err) reject(err)
      const resObj = JSON.parse(res.text)
      resolve(resObj)
    })
  })
}