const Koa = require('koa')

const app = new Koa()

const main = (ctx) => {
    if(ctx.request.accepts('xml')){
        ctx.reponse.type = 'xml'
        ctx.reponse.body = '<data>Hello World</data>'
    }else if(ctx.request.accepts('html')){
        ctx.reponse.type = 'html'
        ctx.reponse.body = '<p>Hello World</p>'
    }else if(ctx.request.accepts('json')){
        ctx.reponse.type = 'json'
        ctx.reponse.body = '{data: Hello World}'
    }else{
        ctx.reponse.type = 'text'
        ctx.reponse.body = '{data: Hello World}'
    }
}



app.listen(3000, ()=>{
    console.log('sucess')
})