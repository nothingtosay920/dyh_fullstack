//拿到药操作的dom结构
//在这个dom上滑动鼠标能控制滑块的位置
//能控制这个dom的高度发送变化
//根据dom高度的值来调整视频播放的速度



var speed = document.querySelector('.speed')
var bar   = document.querySelector('.speed-bar')
var video = document.querySelector('.flex')
speed.addEventListener('mousemove',function(e) {
    var y = e.pageY - speed.offsetTop // 获取某个dom结构到浏览器顶部的距离
    var percent = y / speed.offsetHeight // 获取某个dom结构自身的高度
    var min = 0.4
    var max = 4
    var height = Math.round(percent * 100) + '%'
    var playbackRate = percent * (max - min ) + min 

    bar.style.height = height
    video.playbackRate =  playbackRate
    bar.textContent = playbackRate.toFixed(2) + 'x'
})
