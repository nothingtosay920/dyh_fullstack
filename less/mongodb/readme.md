存储服务

www web 服务 3000
mongodb 27017
mysql 3306

全栈
:8080 vue 前端 npm run start 
webpack webpack-dev-server
vue-router

:3000 后端 node + go
MVC

1. 启动mongodb
  mongod --dbpath "e:/data/db"
NOSQL /test/a.bson
关系型数据库
 mongo 数据库的交互命令行

 ## mongo 的交互语句
 - show dbs
 - use tutorial
 - mysql 要去建表
   mongodb 直接用
   前端非常友好
   给个json 它就存了 没有太严格的关系定义
   定义字段可有可无 没有那么严格 物联网时代以及碎片化信息的收集
 - db.users.insert({})
 - mysql table -> mongodb
  collection
  - find()
    $and
    ObjectId("")

  - update()
  - db.numbers.find({num:500}).explain("executionStarts")
  - 索引
    mysql 关系型数据库 mongodb nosql 都有学习 对js特别友好 json存就可以
    索引进行过学习
    nums 20000条json

  - 电商应用
    node mongodb
  - 数据怎么进数据库
    - 先连接
      mongodb url once('once')
    - 对数据库建模
      userSchema 字段名 + 类型
      mongoose.model('user', userSchema)
      new User.save()

    M层完成