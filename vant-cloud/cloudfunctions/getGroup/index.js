// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'mycomputer-5gmwc9rx59bf8857' // 指明环境
cloud.init()
const db = cloud.database({ env }) // 指明云函数生效的环境
// 云函数入口函数
// 云函数入口函数
exports.main = async (event, context) => {
  // 获取微信上下文 也就是用户信息
  const openId = cloud.getWXContext().OPENID
  // 查找user-group这个库里面是否有openId 
  // 去group这个库里面查找所有的_id和groupId相同的数据
  // 把要的信息返回给前端
}