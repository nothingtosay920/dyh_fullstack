const Koa = require('koa')

const app = new Koa()

const main = (ctx) => {
    ctx.reponse.body = 'Hello world'
}

app.use(main)

app.listen(3000, ()=>{
    console.log('sucess')
})