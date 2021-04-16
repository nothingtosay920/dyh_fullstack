const Koa = require('koa')
const app = new Koa()

app.use((ctx, next) => {
  ctx.body = 'hello world'
})

app.listen(3000)

// const httP = require('http')

// let server = httP.createServer((req, res) => {
//   res.end('hello world')
// })

// server.listen(3000)
// 4个方向 ctx next 中间件 listen