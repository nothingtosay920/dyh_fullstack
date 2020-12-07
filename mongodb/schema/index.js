// 数据库驱动
const mongoose = require('mongoose')
// 将物理的数据存储转变为JSON对象
// Schema 帮我们创建类 给我们API
// 只要看到Schema 就相当于看到了表结构
const Schema = mongoose.Schema
const articleSchema = new Schema(
    {
        title: String,
        data: Date,
        content: String
    }
)
const linkSchema = new Schema({
    name: String,
    href: String,
    newPage: Boolean
})
const userSchema = new Schema({
    name: String,
    password: String,
    email: String,
    createTime: Number,
    atricles: [articleSchema],
    links: [linkSchema]
})

new user()

mongoose.connect('mongodb://127.0.0.1:27017/test')

var db = mongoose.connection
db.on('error', function () {
    console.log('db error');
})
db.once('open', function () {
    console.log('db opened');
})
