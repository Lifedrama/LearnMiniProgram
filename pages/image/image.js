// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:''

  },
  handtup(){
    //系统api，让用户在相册中选择图片（或者拍摄）
    wx.chooseImage({
      success:(res)=> {
        // console.log(res)
        //1.取出路径
        const path = res.tempFilePaths[0]
        //2.设置imagePath
        //this:undefined
        this.setData({
          imagePath:path
        })
      },
    })
  },
  handload() {
    console.log("加载完成")
  }
})