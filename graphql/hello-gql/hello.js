const express = require('express')
// 定义查询 buildSchema Model
const { buildSchema } = require('graphql')
const graphqlHTTP = require('express-graphql').graphqlHTTP

// 查询 自定义类型
// 带参数
const schema = buildSchema(`
  type User {
    name: String
    age: Int
  }
  type Query {
    hero: String
    user: User
    getHero (teamName: String!):[String]
  }
`)

// 值来的地方
const root = {
  hero: () => {
    return 'I am icon man'
  },
  user: () => {
    return {
      name: 'leo',
      age: 18
    }
  },
  getHero: ({teamName}) => {
    const hero = {
      '三国': ['张飞', '刘备', '关羽'],
      '复仇者联盟': ['钢铁侠', '美国队长', '绿巨人']
    }
    return hero[teamName]
  }
}


const app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(8000)