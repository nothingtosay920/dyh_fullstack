const router = require('koa-router')()
const controller = require('../controller/c-signin')
router.post('/signin', controller.postSign
  // 展示登录界面
)

module.exports =  router