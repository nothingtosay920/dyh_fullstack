const { GraphQLSchema, GraphQLInputObjectType } = require('graphql')

const userSchema = require('./user')

const Query = GraphQLInputObjectType({
  name: 'UserQuery',
  descrition: '用户信息查询',
  fields: () => (Object.assign({}, userSchema.query))
})

const schema = new GraphQLSchema({
  query: Query
})

module.exports = schema