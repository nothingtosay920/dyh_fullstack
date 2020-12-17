const Koa = require('koa')
const app = new Koa()
const views = require('koa-views') // 读模板
const json = require('koa-json') // 格式化一下输出格式
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser') // 参数解析功能增强
const logger = require('koa-logger') // 打印日志
const cors = require('koa2-cors')
const index = require('./routes/index')
const users = require('./routes/users')


// error handler
onerror(app)

// 解决跨域
app.use(cors())

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app