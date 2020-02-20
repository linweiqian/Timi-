// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total:0,
    // carts: [
    //   {
    //     pic: "../../images/shop1.jpg",
    //     name: "日本资生堂洗颜",
    //     price: 200,
    //     isSelect: false,
    //     num:1
    //   },
    //   {
    //     pic: '../../images/shop2.jpg',
    //     name: "倩碧焕妍活力精华露",
    //     price: 340,
    //     isSelect: false,
    //     num: 1
    //   },
    //   {
    //     pic: '../../images/shop3.jpg',
    //     name: "特效润肤露",
    //     price: 390,
    //     isSelect: false,
    //     num: 1,
    //   },
    //   {
    //     pic: '../../images/shop4.jpg',
    //     name: "倩碧水嫩保湿精华面霜",
    //     price: 490,
    //     isSelect: false,
    //     num: 1
    //   },
    //   {
    //     pic: '../../images/shop5.jpg',
    //     name: "兰蔻清莹柔肤爽肤水",
    //     price: 289,
    //     isSelect: false,
    //     num: 1
    //   },
    //   {
    //     pic: "../../images/shop6.jpg",
    //     name: "LANCOME兰蔻小黑瓶精华",
    //     price: 230,
    //     isSelect: false,
    //     num: 1
    //   },
    // ],
  },
    // 添加按钮
  carAdd:function(e){
    // console.log(e.target.dataset.index);
    let curIndex = e.target.dataset.index;
    let num=this.data.carts[curIndex].num;
    let key = "carts["+curIndex+"].num";
    let obj={};

     obj[key] = ++num;
     this.setData(obj)
     wx.setStorageSync('GoodsCarlist', this.data.carts)
     this.onShow()
  },
    //减少按钮
  carRed: function (e) {
    // console.log(e.target.dataset.index);
    let curIndex = e.target.dataset.index;
    let num = this.data.carts[curIndex].num;
    let key = "carts[" + curIndex + "].num";
    let obj = {};
    obj[key]=num <=1 ? 1: --num;
    this.setData(obj)
    wx.setStorageSync('GoodsCarlist', this.data.carts)
    this.onShow()
  },
  // 删除按钮
  carDel:function(e){
    let curIndex = e.target.dataset.index;
    let carlist = this.data.carts;
    carlist.splice(curIndex,1);
    this.setData({
      carts:carlist
    })
    wx.setStorageSync('GoodsCarlist', this.data.carts)
    this.onShow()
  },
  buyTo:function(){
    wx.navigateTo({
      url: '../pay/pay',
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
    this.AllPrice();
  },
  AllPrice:function(){
    var allgoodsdata = wx.getStorageSync('GoodsCarlist');

    var totalPrice = 0;
    for (var i = 0; i < allgoodsdata.length; i++) {
      totalPrice += allgoodsdata[i].price * allgoodsdata[i].num;
    }
    this.setData({
      carts:allgoodsdata,
      total: totalPrice
    })

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