// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'mycomputer-5gmwc9rx59bf8857' // 指明环境
cloud.init()
const db = cloud.database({ env }) // 指明云函数生效的环境
// 云函数入口函数
exports.main = async (event, context) => {
 const userInfo = event.userInfo
//  event除了包含前端传来的信息外 自动携带用户信息
 return await db.collection('group').add({
   data: {
     name: event.groupName,
     createBy: userInfo.openId,
     createTime: new Date(),
     deleted: false,
     updateTime: new Date()
   }
 }).then(res=>{
    return db.collection('user-group').add({
      data: {
        groupId: res._id,
        userId: userInfo.openId,
        invalid: false
      }
    })
 }) 
}