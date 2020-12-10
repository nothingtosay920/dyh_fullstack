const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')

// 中间件
const main = (ctx, next) => {
  // console.log(ctx);
  ctx.body = 'hello'
}
app.use(route.get('/abc', main))

app.listen(3000)

// 基础后端
// 提供一个可以访问的地址
// 让代码能被数据库读取 传给前端