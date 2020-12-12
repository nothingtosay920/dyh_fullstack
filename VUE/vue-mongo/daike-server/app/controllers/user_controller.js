const User_col = require('../modules/user')
const Password_col = require('../modules/password')

const login = async(ctx) => {
  // console.log(ctx.request.body);
  // 获取用户的userId
  let req = ctx.request.body
  // 查找语句 获取userId
  // 连接数据库 去数据库里查找是否存在该条数据
  const user = await User_col.findOne({
    account: req.username
  })
  if (!user) {
    ctx.status = 200
    ctx.body = {
      code: 0,
      msg: '账号不存在'
    }
    return
  }
  // 能找到
  const userId = user.userId

  // 查密码
  const pass = await Password_col.findOne({
    userId
  }, {
    hash: 1
  })
  // 如果在密码表里找到了账号相同的id
  // 判断该id对应的密码和前端传过来的是否匹配
}


module.exports = {
  login
}