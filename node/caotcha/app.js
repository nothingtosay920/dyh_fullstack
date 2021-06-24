const express = require('express')
const api = require('./api.js')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.send('hello world')
})
app.get('/captcha', function(req, res) {
  api.createCaptcha(req, res)
})
app.get('/login', function(req, res) {
  res.render('login', {

  })
})
app.listen(3000)