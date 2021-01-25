const Koa = require('koa')
const fs = require('fs')
const mount = require('koa-mount')
const static = require('koa-static')

const app = new Koa()

// 静态资源
app.use(
  static(__dirname + '/source/')
)

app.use(
  mount('/', async (ctx) => {
    ctx.body = fs.readFileSync(__dirname + '/source/index.html', 'utf-8')
  })
)

// node服务器向后端服务器作rpc通信拿到真实数据
// 模版引擎放上真实数据之后
// 根据浏览器请求的地址，去返回对应的模版引擎

app.listen(3000)

