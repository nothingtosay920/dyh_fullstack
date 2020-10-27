// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'mycomputer-5gmwc9rx59bf8857'
cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo

  // 先查看user库里面有没有这个openId
  const checkUser = await db.collection('user').where({
    openId: userInfo.openId
  }).get()
  // 已经存在该用户,更新用户信息
  if (checkUser.data.length > 0) {
    await db.collection('user').doc(checkUser.data[0]._id)
      .update({
        data: {
          avatarUrl: event.avatarUrl,
          nickName: event.nickName,
          sex: event.sex
        }
      })
  } else {
    const insertResult = await db.collection('user').add({
      data: {
        avatarUrl: event.avatarUrl,
        nickName: event.nickName,
        sex: event.sex,
        name: '',
        openId: event.userInfo.openId,
        createTime: new Date()
      }
    })
  }
}