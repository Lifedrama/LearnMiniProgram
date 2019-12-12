// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handinput(event){
    console.log("输入内容：",event)
  },
  handfocus(event){
    console.log("获取焦点：", event)
  },
  handblur(event){
    console.log("失去焦点：", event)
  },
})