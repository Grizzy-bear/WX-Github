// pages/Activity/Activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"Browser Activity",
    content: [{
        "id": "8341866956",
        "type": "MemberEvent",
        "actor": {
          "id": 18313489,
          "login": "zoom-quiet",
          "display_login": "zoom-quiet",
          "gravatar_id": "",
          "url": "https://api.github.com/users/zoom-quiet",
          "avatar_url": "https://avatars.githubusercontent.com/u/18313489?"
        },
        "repo": {
          "id": 62988018,
          "name": "zoom-quiet/Noah2Ark",
          "url": "https://api.github.com/repos/zoom-quiet/Noah2Ark"
        },
        "payload": {
          "member": {
            "login": "YixuanFranco",
            "id": 3478088,
            "node_id": "MDQ6VXNlcjM0NzgwODg=",
            "avatar_url": "https://avatars0.githubusercontent.com/u/3478088?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/YixuanFranco",
            "html_url": "https://github.com/YixuanFranco",
            "followers_url": "https://api.github.com/users/YixuanFranco/followers",
            "following_url": "https://api.github.com/users/YixuanFranco/following{/other_user}",
            "gists_url": "https://api.github.com/users/YixuanFranco/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/YixuanFranco/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/YixuanFranco/subscriptions",
            "organizations_url": "https://api.github.com/users/YixuanFranco/orgs",
            "repos_url": "https://api.github.com/users/YixuanFranco/repos",
            "events_url": "https://api.github.com/users/YixuanFranco/events{/privacy}",
            "received_events_url": "https://api.github.com/users/YixuanFranco/received_events",
            "type": "User",
            "site_admin": false
          },
          "action": "added"
        },
        "public": true,
        "created_at": "2018-09-29T09:32:57Z",
        "org": {
          "id": 18313489,
          "login": "zoom-quiet",
          "gravatar_id": "",
          "url": "https://api.github.com/orgs/zoom-quiet",
          "avatar_url": "https://avatars.githubusercontent.com/u/18313489?"
        }
      }],
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    // wx.request({
    //   url: 'https://api.github.com/users/Grizzy-bear/received_events',
    //   header: {
    //     'Content-Tpye': 'application/json'
    //   },
    //   method: "GET",
    //   success: function (res) {
    //     console.log(res.data);
    //     that.setData({
    //       content: res.data
    //     })
    //   },
    //   fail: function (err) { },
    //   complete: function () { }
    // });
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