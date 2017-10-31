//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    friendJoin: [{
      id: 0,
      title: '儿童素养教育计划',
      desc: '捐40元，为渴望学习知识的孩子点燃一根梦想的火柴。',
      friends: ['']
    }],
    donationList: {
      edu: {
        list: [{
            id: 0,
            title: '儿童素养教育计划',
            desc: '捐40元，为渴望学习知识的孩子点燃一根梦想的火柴。',
            friends: 63598
          },
          {
            id: 1,
            title: '点亮星空山村幼儿园',
            desc: '山村幼儿园计划为贫困农村3-6岁儿童提供有质量的学前教育。',
            num: 58676
          },{
            id: 2,
            title: '儿童素养教育计划',
            desc: '捐40元，为渴望学习知识的孩子点燃一根梦想的火柴。',
            friends: 63598
          },
          {
            id: 3,
            title: '点亮星空山村幼儿园',
            desc: '山村幼儿园计划为贫困农村3-6岁儿童提供有质量的学前教育。',
            num: 58676
          },
        ]
      }
    },
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})