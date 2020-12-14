const koa = require('koa')
const path = require('path')
const config = require('./config/default')
const app = new koa()
const session = require('koa-session-minimal')
const views = require('koa-views')
const MysqlStore = require('koa-mysql-session')

// app.use((ctx) => {
//   ctx.body = 'hello world'
// })

// session 存储配置
const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
}

// 配置session中间件 
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}))

// 配置服务端的模板引擎中间件
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))


app.use(require('./routers/signin').routes())

app.listen(config.port, () => {
  console.log('3000端口已启动');
})