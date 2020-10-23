// miniprogram/pages/index/index.js
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newGroupModal: false,
    groupName: ''
  },

  showNewGroupModal() {
    // console.log(123);
    this.setData({
      newGroupModal: true
    })
  },
  onClose() {
    this.setData({
      newGroupModal: false
    })
  },
  createGroup() {
    // 把groupName存到数据库中(传给后端)
    const self = this
    if (self.data.groupName === '') {
      Notify({
        message: '不能为空',
        duration: 1500,
        selector: '#notify-selector',
        background: '#dc3545'
      });
      self.setData({
        newGroupModal: true
      })
      return 
    }
    wx.cloud.callFunction({
      name: 'createGroup',
      data: {
        groupName: self.data.groupName
      },
      success(res) {
        // console.log(res);
        self.setData({
          groupName: ''
        })
        Notify({
          message: '新建成功',
          duration: 1500,
          selector: '#notify-selector',
          background: '#28a745'
        });
        setTimeout(() =>{
          wx.switchTab({
            url: '/pages/group/group'
          })
        }, 1500)
      },
      fail(err) {
        console.log('错误', err);
      }
    })
  },
  onGroupNameChange(event) {
    this.setData({
      groupName: event.detail
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})