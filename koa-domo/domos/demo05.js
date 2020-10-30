const Koa = require('koa')
const app = new Koa()
const fs  = require('fs')

const main = ctx=>{
    
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">index page</a>'
}
app.use(main)
app.listen(3000, ()=>{
    console.log("3000端口已启动");
})