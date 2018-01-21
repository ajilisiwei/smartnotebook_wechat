var config={
  note_types: ['文本笔记', '录音笔记', '视频笔记']
}

//弹出笔记类别选中框
exports.topNoteTypeView=()=>{
  wx.showActionSheet({
    itemList:config.note_types,
    success: function (res) {
      console.log(res.tapIndex)
      // next(res.tapIndex);
      addNoteByType(res.tapIndex);
    },
    fail: function (res) {
      console.log(res.errMsg)
    }
  }) 
}

//新增不同类型的笔记
function addNoteByType(notetype) {
  console.log(notetype);
  if(notetype===0){
    wx.navigateTo({
      url: './note/notedetails',
    })
  }else{
    console.log("暂时不支持其他类型笔记...")
  }
}