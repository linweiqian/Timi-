// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      total:0
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
      this.AllPrice()
  },
  AllPrice: function () {
    var allgoodsdata = wx.getStorageSync('GoodsCarlist');

    var totalPrice = 0;
    for (var i = 0; i < allgoodsdata.length; i++) {
      totalPrice += allgoodsdata[i].price * allgoodsdata[i].num;
    }
    this.setData({
      carts: allgoodsdata,
      total: totalPrice
    })

  },
    submit:function(){
      wx.showToast({
        title: '订单提交成功',
        icon: 'success',
        duration: 2000
      })
      setTimeout(function(){
        wx.switchTab({
          url: '../shop/shop',
        })
      },2000)
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