//donation.js
const util = require('../../utils/util.js')

Page({
  data: {
    donation: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('donation') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
