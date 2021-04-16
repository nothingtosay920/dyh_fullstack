
const EventEmitter = require('events')
const http = require('http')
const context = require('./context')
const request = require('./request')
const response = require('./response')
class Koa extends EventEmitter{
  constructor () {
    super()
    this.fn
    this.context = context
    this.request = request
    this.response = response
  }
  use(fn) { // ctx是koa本身
    this.fn = fn
  }
  handleRequest(req, res) {
    let ctx = this.createContext(req, res)
    this.fn(ctx)
    res.end(ctx.body)
  }
  createContext(req, res) { // 构建ctx
    const ctx = Object.create(this.context)
    const request = ctx.request = Object.create(this.request)
    const response = ctx.response = Object.create(this.response)
    ctx.req = request.req = response.req = req 
    ctx.res = request.res = response.res = res
    request.ctx = response.ctx = ctx
    request.response = response
    response.request = request
    return ctx
  }
  listen(...args) {
    http.createServer(this.handleRequest.bind(this)).listen(...args)
  }
}

module.exports = Koa