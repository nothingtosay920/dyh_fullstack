const Router = require('koa-router')
const router = new Router()
const user_controller = require('../../app/controllers/user_controller')
// get常用无参取数据 post有参
router.post('/login', user_controller.login
  // 拿到前端传过来的参数 去数据库里匹配是否存在
  )

module.exports = router