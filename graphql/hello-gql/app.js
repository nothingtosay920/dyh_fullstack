const express = require('express')
const app = express()
const graphqlHTTP = require('express-graphql').graphqlHTTP
const userSchema = require('./graphql/user/schema')
app.use('/graphql', graphqlHTTP({
  schema: userSchema,
  graphiql: true
}))
app.listen(1514)