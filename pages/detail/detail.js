Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ["../../images/shop1.jpg", '../../images/shop2.jpg', '../../images/shop3.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    good:{
        id:3,
        name: "好喝的果汁",
        pic: "../../images/shop1.jpg",
        price: 200,
        isSelect: false,
      },
      num:0
  },
  addCar:function(){
  //  console.log(this.data.good)
    var Cardata = {
      id : this.data.good.id,
      name: this.data.good.name,
      price: this.data.good.price,
      pic: this.data.good.pic,
      num:1
    }
    var GoodsCarlist = wx.getStorageSync("GoodsCarlist");
    // console.log(GoodsCarlist)
  
    // 有数据
    if (GoodsCarlist){
      // 有相同数据
      var flag=true;
      for (var i = 0; i < GoodsCarlist.length;i++){
        if(GoodsCarlist[i].id==Cardata.id){
          GoodsCarlist[i].num+=1
          flag =false;
        }
      }
      // 没有相同数据
      if(flag){
        GoodsCarlist.push(Cardata)
      }
      wx.setStorageSync("GoodsCarlist", GoodsCarlist)
    }else{
      // 没有数据
      wx.setStorageSync("GoodsCarlist", [Cardata])
    }
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      duration: 2000
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(11111)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(222)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
    this.setData({
      num: wx.getStorageSync("GoodsCarlist").length
    })
    console.log(333)
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