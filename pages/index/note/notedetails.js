const service = require('../utils/service.js');
const utils= require('../utils/utils.js');
let isNew=false;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    note: { title: "", content: "" }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log("笔记id=" + options.id);
    var id = options.id;
    if(!id){ //新增笔记
      isNew=true;
    }else{  //编辑笔记
      service.getNoteById(id, this.showNoteDetails, that);
    }
  },

/**
 * 显示笔记的内容
*/
  showNoteDetails: function (that, data) {
    that.setData({
      note: data,
      done: true
    });
  },


/**
 * 操作按键点击事件
*/
  showOperations:function(){
    utils.topOperationsView();
  },


  /**
   * 笔记标题完成
  */
  noteTitleConfirm:function(e){
    console.log(e.detail.value);
    //01.请求添加笔记接口
    //02.返回上一页
  },

  /**
   * 笔记内容完成
  */
  noteDetailsConfirm: function (e) {
    console.log(e.detail.value)
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