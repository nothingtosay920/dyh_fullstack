const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const express = require('express')
const koa = require('koa')
const mount = require('koa-mount')

const game = require('../game.js')

let playerWon = 0
let playerLastAction = null
let sameCount = 0

const app = new koa()

app.use(
  mount('/favicon.ico', function(ctx) {
    ctx.status = 200
  })
)
const gamekoa = new koa()

// 赢三次
gamekoa.use(
  async function(ctx, next) {
    if (playerWon >= 3) {
      ctx.status = 500
      ctx.body = '我不和你玩了'
      return
    }
    await next()

    if (res.playerWon) {
      playerWon++
    }
  },
  
)
// 三次相同
gamekoa.use(
  async function(ctx, next) {
    const query = ctx.query
    const playerAction = query.action

    if (!playerAction) {
      ctx.status = 400
      return
    }
    if (sameCount == 9) {
      ctx.status = 500
      ctx.body = '不玩了'
    }
    if (playerAction == playerLastAction) {
      sameCount++
      if (sameCount >= 3) {
        // res.writeHead(400)
        // res.end('你作弊！')
        ctx.status= 400
        sameCount = 9
        return
      }
    } else {
      sameCount = 0
    }

    playerAction = playerLastAction
    ctx.playerAction = playerWon
    
    await next()
  }
)
// 计算结果
gamekoa.use(
  async function(ctx, next) {
    const playerAction = query.action
    const gameResult = game(playerAction)

    await new Promise(resove => {
      setTimeout(() => {
        ctx.status(200)
        if (gameResult == 0) {
          ctx.body('平局')
        } else if (gameResult == 1) {
          ctx.body('你赢了！')
          playerWon++
        } else {
          ctx.body('你输了！')
        }
        resolve()
      }, 500)
    })
  }
)


app.use(
  mount('/', function(ctx) {
    ctx.body = fs.readFileSync(__dirname + '/game.html', 'utf-8')
  })
)

app.use('/game', gamekoa)
app.listen(3000)

