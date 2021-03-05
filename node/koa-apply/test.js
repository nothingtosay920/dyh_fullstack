// koa核心非常小

// koa 是一个类
let koa = require('Koa')
let app = new koa()
app.use((ctx, next) => { 
  ctx.body = 'hello koa'
})
app.listen(3000)