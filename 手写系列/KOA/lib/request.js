// 为什么koa里面没有req 整理
const url = require('url')
let request = {
  get url() {
    return this.req.url
  },
  get path() {
    return url.parse(this.req.url).pathname
  }
}

module.exports = request
