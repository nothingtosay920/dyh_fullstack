const router = require('koa-router')()
const contorller = require('../controller/c-signup')
router.get('/signup', async (ctx, next) => {
  await ctx.render('signup', {
    session: ctx.session
  })
})

// 点击注册按钮的响应事件
router.post('/signup', contorller.postSignup)
module.exports =  router