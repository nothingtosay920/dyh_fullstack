var saleOffices = {} // 售楼处 发布者 楼价多少
// 如果售楼处有消息出来的时候
// addEventListener 如何实现
saleOffices.clicentList = []  // 买房的人 订阅者
// document.body   callback
saleOffices.listen = function (fn) {
    this.clicentList.push(fn)   
}
saleOffices.trigger = function (price, squareMeter) {
    for(var i =0 ; i < this.clicentList.length ; i++) {
        this.clicentList[i](price, squareMeter)
    }
}
saleOffices.listen(
    function (price, squareMeter) {
    if (price > 18000) {
        console.log('买')
    }else{
        console.log('不买')
    }
    console.log('价格:' + price)
    console.log('面积:'+ squareMeter)
})
saleOffices.listen(
    function (price, squareMeter) {
    if (squareMeter > 120) {
        console.log('买')
    }else{
        console.log('不买')
    }
    console.log('价格:' + price)
    console.log('面积:'+ squareMeter)
})
saleOffices.trigger(20000, 88)