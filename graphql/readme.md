# restful 的替代品
来自facebook 良心出品的查询方案

json-server
基于restful的概念
url + action
db.json 资源中心
/results list 请求到了 select *
会有很多不需要的数据
基础上设计graphql查询设计语言
1. 设计查询方案 就得到什么
2. 合并传统后端在哪些数据的时候连n张表进行查询 一次就够

- 启动graphql
  1. express
  2. 加入graphql 中间件 每次查询graphql都会介入
    graphqlHTTP playground
  3. scehma hero + rootValue
  4. graphql 可以省去很多请求浪费
  5. 前端可以决定用哪些字段