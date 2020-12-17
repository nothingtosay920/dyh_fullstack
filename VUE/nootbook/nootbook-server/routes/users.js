const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')
router.prefix('/users') // 默认添加前缀

router.post('/userLogin', async (ctx, next) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;

  // 把参数拿到数据库里查询
  await userService.userLogin(_username, _userpwd).then(res => {
    let r =''
    if (res.length) {
      r = "ok"
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      } 
      ctx.body = {
        code: '80000',
        data: result,
        mess: '登录成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '账号或密码错误'
      }
    }

  }).catch(err => {
    ctx.body = {
      code: '80002',
      data: err
    }
  })
})

// 注册 2次 一次有没有账号 一次植入
router.post('/userRegister', async (ctx, next) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;
  let _nickname = ctx.request.body.nickname
 

  if (!_username || !_nickname || !_userpwd ) {
    ctx.body = {
      code: "80001",
      mess: '用户密码昵称不能为空'
    }
    return 
  }
  await userService.findUser(_username).then(async res => {
    if (res.length) {
      ctx.body = {
        code: '80003',
        message: '用户名已存在'
      }
    } else {
      await userService.insertUser([_username, _userpwd,_nickname]).then(res => {
        let r = ''
        if (res.affectedRows != 0) {
          r = 'ok'
          ctx.body = {
            code: '80000',
            data: r,
            mess: '注册成功'
          }
        } else {
          r = 'error'
          ctx.body = {
            code: '80004',
            data: r,
            mess: '注册失败'
          }
        }
      })
    }
  })
})

// 拿数据
router.post('/findNoteListByType', async (ctx, next) => {
  let _note_type = ctx.request.body.note_type
  await userService.findNoteListByType(_note_type).then(res => {
    ctx.body = {
      code: '80000',
      data: res,
      mess: '查找成功'
    }
  })
})

router.post('/findDetailById', async (ctx, next) => {
  let id = ctx.request.body.id
  await userService.findDetailById(id).then(res => {
    ctx.body = {
      code: '80000',
      data: res[0],
      mess: '查找成功'
    } 
  })
})

router.post('/noteEdit', async (ctx, next) => {
  const time = new Date()
  let c_time = `${time.getFullYear()}年${time.getMonth()}月${time.getUTCDate()}`
  let note_content = JSON.stringify(ctx.request.body.note_content)
  let head_img = ctx.request.body.head_img
  let note_type = ctx.request.body.note_type
  let userId = JSON.stringify(ctx.request.body.userId)
  let nickname = ctx.request.body.nickname
  let title = ctx.request.body.title
  await userService.insertNote([userId, title, note_type, note_content, head_img, nickname, c_time]).then(res => {
    ctx.body = {
      code: '80000',
      mess: '插入成功'
    }
  })
})
module.exports = router
