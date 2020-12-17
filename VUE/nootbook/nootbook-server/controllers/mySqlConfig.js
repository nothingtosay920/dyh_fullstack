const mysql = require('mysql')
const config = require('./defaultConfig')
const getTime = require('../controllers/util')

// 连接线程池
let pool = mysql.createPool({
  host: config.dataBase.HOST,
  user: config.dataBase.USERNAMA,
  password: config.dataBase.PASSWORD,
  database: config.dataBase.DATABASE,
  port: config.dataBase.PORT
})

let allServices = {
  query: function (sql, values) {
    return new Promise ((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}

// 用户登录
let userLogin = function (username, userpwd) {
  let _sql = `select * from users where username="${username}" and userpwd="${userpwd}";`
  return allServices.query(_sql)
}

// 查找用户拎出来
let findUser = function (username) {
  let _sql = `select * from users where username="${username}";`
  return allServices.query(_sql)
}

// 注册 values 会在connect生效
let insertUser = function (values) {
  let _sql = `insert into users set username=?,userpwd=?,nickname=?;`
  return allServices.query(_sql, values)
}

// 获取数据
let findNoteListByType = function (note_type) {
  let _sql = `select * from note where note_type="${note_type}"`
  return allServices.query(_sql)
}

// 取数据
let findDetailById = function (id) {
  let _sql = `select * from note where id="${id}"`
  return allServices.query(_sql)
}

// 发布信息 
let insertNote = function (values) {
  let _sql = `insert into note set useId=?,title=?,note_type=?,note_content=?,head_img=?,nickname=?,c_time=?`
  return allServices.query(_sql, values)
}
module.exports = {
  userLogin,
  findUser,
  insertUser,
  findNoteListByType,
  findDetailById,
  insertNote
}