// pages/home/home.js
//getApp() 获取APP()产生的实例对象
const app = getApp()
console.log(app.globaData.name)
console.log(app.globaData.age)



Page({
  data:{ 
    name:"ddd",
    age:18,
    student:[
      {id: 110,name:'ko',age:30},
      {id: 111, name: 'do', age: 30 },
      {id: 1120, name: '2o', age: 30 }
    ],
    c:0
  },
  handleBtnClick(){
    this.setData({
      c:this.data.c +1
    })
  },
  handleSubtraction(){
    this.setData({
      c:this.data.c - 1
    })
  },

  handclick(event){
    console.log("————")
    console.log(event)
  },

  //监听其他事件
  //监听页面滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚动到底部
onReachBottom(){
  console.log("页面滚动到底部")
},

onPullDownRefresh(){
  console.log("下拉刷新的事件")
},



  //1.监听页面的生命周期函数
  //页面被加载出来
  onLoad() {
    console.log("onLoab")
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      //ES6语法：箭头函数中的this是一层层向上找
      success: (res) =>{
        console.log(res)
      }
    })
  },
  //页面显示出来时
  onShow() {
    console.log("onShow")
  },
  //页面初次渲染完成时 
  onReady() {
    console.log("onReady")
  },
  //当页面隐藏起来时
  onHide() {
    console.log("onHide")
  },
  //
  onUnload(){
    console.log("onUnload")
  }
})

