// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollH: 200,
    shopArr: [
      {
        'cate_id': 1,
        'icontext': '热销推荐',
        'ischild': true,
        children: [
          {
            'name': '可乐',
            'imgUrl': 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2914160083,3198651200&fm=26&gp=0.jpg'
          },
          {
            'name': '雪碧',
            'imgUrl': 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1029246408,1038066345&fm=26&gp=0.jpg'
          },
          {
            'name': '橙汁',
            'imgUrl': 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3122354649,2274960719&fm=26&gp=0.jpg'
          }
        ]
      },
      {
        'cate_id': 2,
        'icontext': '鲜果奶茶',
        'ischild': true,
        children: [
          {
            'name': '可乐123',
            'imgUrl': 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1103004422,3024924938&fm=26&gp=0.jpg'

          }
        ]
      },
      {
        'cate_id': 3,
        'icontext': '益菌多多',
        'ischild': true,
        children: [
          {
            'name': '橙汁123',
            'imgUrl': 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2026364990,677744001&fm=26&gp=0.jpg'

          }
        ]
      },
      {
        'cate_id': 4,
        'icontext': '法式奶霜',
        'ischild': true,
        children: [
          {
            'name': '雪碧123',
            'imgUrl': 'http://img4.imgtn.bdimg.com/it/u=3833271757,3005209369&fm=26&gp=0.jpg'

          }
        ]
      },
      {
        'cate_id': 5,
        'icontext': '香浓牛奶',
        'ischild': true,
        children: [
          {
            'name': '橙汁123',
            'imgUrl': 'http://img0.imgtn.bdimg.com/it/u=3288365441,2117526359&fm=26&gp=0.jpg'

          }
        ]
      },
      {
        'cate_id': 6,
        'icontext': '醇香奶茶',
        'ischild': true,
        children: [
          {
            'name': '奶茶',
            'imgUrl': 'http://img0.imgtn.bdimg.com/it/u=3454935687,2687442127&fm=26&gp=0.jpg'

          }
        ]
      },
      {
        'cate_id': 7,
        'icontext': '醇品茶香',
        'ischild': true,
        children: [
          {
            'name': '芦荟汁',
            'imgUrl': 'http://img2.imgtn.bdimg.com/it/u=1119015176,937586034&fm=26&gp=0.jpg'

          }
        ]
      },
      {
        'cate_id': 8,
        'icontext': '浓情巧可',

        children: [
          {
            'name': '西瓜汁',
            'imgUrl': 'http://img0.imgtn.bdimg.com/it/u=2577614434,2703260508&fm=26&gp=0.jpg'

          }
        ]
      },
      {
        'cate_id': 9,
        'icontext': '现磨咖啡',
        'ischild': false,
        children: []
      },

    ],
    curId: 1,
    curIndex: 0

  },
  seltag: function (e) {
    // console.log(e);
    // console.log(e.target.dataset.id)
    // console.log(e.target.dataset.index)
    let id = e.target.dataset.id;
    let index = e.target.dataset.index;
    this.setData({
      curId: id,
      curIndex: index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.getSystemInfo({
      success(res) {
        _this.setData({
          scrollH: res.windowHeight
        })
      }
    })
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