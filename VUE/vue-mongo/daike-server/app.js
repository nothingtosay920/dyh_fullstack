const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose'); // mongodb的连接
const config = require('./config')

// 建立mongodb的连接
// 需要mongoose 做桥梁 
mongoose.connect(config.db, {useNewUrlParser: true}, (err) => {
  if (err) {
    console.log('failed');
  } else {
    console.log('connecting database successfully');
  }
})



// 解决跨域
const cors = require('koa2-cors')
app.use(cors())

// 解决参数解析问题
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// app.use((ctx) => {
//   ctx.body = 'hello'
// })


const user_router = require('./routes/api/user_router')
app.use(user_router.routes())

// 定义get请求


app.listen(3000)

// 接口就是后端的路由