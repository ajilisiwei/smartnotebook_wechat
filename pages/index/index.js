const noteData = [{ id: 1, text: "床前明月光" }, { id: 2, text: "疑是地上霜" }, { id: 3, text: "床前明月光" }, { id: 4, text: "疑是地上霜" }, { id: 5,text: "床前明月光" }];

var service=require('./utils/service.js');
var utils=require('./utils/utils.js');

Page({
  data: {
    listLi: [],
    page: 1,
    scrollTop: 0,
    done: false,
    hidden: true
  },
  
  onLoad: function (options) {
    this.getList(1);
  },

  onPullDownRefresh: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    });
    this.getList(1, true);
  },

  getList: function (page, stopPull) {
    var that = this
    that.setData({
      page: page + 1,
      listLi: noteData ,
      done: false
    })

  },

//加载更多
  loadMore: function () {
    var done = this.data.done;
    if (done) {
      return
    } else {
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 500
      });
      var page = this.data.page;
      this.getList(page)
    }
  },

  scrll: function (e) {
    var scrollTop = e.detail.scrollTop
    if (scrollTop > 600) {
      this.setData({
        scrollTop: 1,
        hidden: false
      })
    } else {
      this.setData({
        scrollTop: 1,
        hidden: true
      });
    }
  },

//回到顶部
  goTop: function () {
    this.setData({
      scrollTop: 0,
      hidden: true
    })
  },

  //增加笔记
  addNote: function() {
    var that=this;
    console.log("你点击了增加按键...");
    utils.topNoteTypeView();
  },

  //搜索框
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },

//隐藏搜索框
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },

//清除搜索框内文字
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },

//搜索框输入
  inputTyping: function (e) {
    var that=this;
    console.log(e);
    let text=e.detail.value;
    var dataset = service.getNoteList(text, this.refreshListData,that);
  },

//刷新列表的数据
  refreshListData:(that,data)=>{
    that.setData({
      page: 1,
      listLi: data,
      done: false
    });
  },

//显示笔记详情
  showNote: function (e) {
    var id = e.currentTarget.dataset.index;
    console.log(id);
    wx.navigateTo({
      url: './note/notedetails?id='+id,
    })
  },

  // //新增笔记
  // addNoteByType: function(notetype) {
  //   console.log(notetype);
  //   wx.navigateTo({
  //     url: './note/notedetails',
  //   })
  // }

})
