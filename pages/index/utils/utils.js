var config = {
  prefix: "http://wechatdev.ajilisiwei.com"
}

//获取笔记列表
exports.getNoteList = (text, next,that) => {
  new Promise((resolve, reject) => {
    wx.request({
      url: config.prefix + "/images/",
      data: {
        page: 0,
        per: 20
      },
      method: 'GET',
      success: (res) => resolve(res),
      error: (err) => reject(err)
    })
  }).then((res) => {
    if (res) {
      next(that,res.data)
    }
  }).catch((err) => console.error(err))
}

// 根据id查询note
exports.getNoteById=(id,next,that)=>{
  new Promise((resolve, reject) => {
    // wx.request({
    //   url: config.prefix + "/images/"+id,
    //   method: 'GET',
    //   success: (res) => resolve(res),
    //   error: (err) => reject(err)
    // })
    var data = { id: 1, title: "静夜思", content: "床前明月光，疑是地上霜。举头望明月，低头思故乡。"};
    resolve(data);
  }).then((res) => {
    if (res) {
      next(that, res)
    }
  }).catch((err) => console.error(err))
}

