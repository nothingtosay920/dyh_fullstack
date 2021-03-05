let koa = require('./koa/application')
let app = new koa()

app.use((req, res) =>  {
  res.end('hellow wn')
})
app.listen(3000)