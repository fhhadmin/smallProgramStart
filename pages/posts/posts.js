// pages/posts/posts.js
var postsData = require('../../data/posts-data.js')
Page({
  // 产生事件  
  /**
   * 页面的初始数据
   */
  data: {
    
  },

  detail: {

  },
  process:function() {
    // 数据绑定

  },
  onPostTap:function(event) {
    console.log(event.currentTarget.dataset.postid)
  },

  /**
   * 生命周期函数--监听页面加载（页面初始化）
   */
  onLoad: function (options) {
    this.setData({
      posts_content: postsData.postList
    })
  }
})