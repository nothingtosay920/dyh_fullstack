// components/nav-bar/nav-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    statusBarColor: {
      type: String,
      value: '#fff'
    },
    navBarColor: {
      type: String,
      value: '#fff'
    },
    titleColor: {
      type: String,
      value: '#000'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    topHeight: 0,
    statusBarStyle: '',
    navBarStyle: ''
  },

  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      let navBarStyle = `background-color: ${this.properties.navBarColor}; 
      height: ${wx.db.navBarHeight}px; color: ${this.data.titleColor}`
      let statusBarStyle = `background-color: ${this.data.statusBarColor};
      height: ${wx.db.statusBarHeight}px`
      // console.log(navBarStyle);
      // console.log(statusBarStyle);
      this.setData({
        statusBarStyle: statusBarStyle,
        navBarStyle: navBarStyle
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
