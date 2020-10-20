window.onload = function() {
    imgLocation('container', 'box')
}


获取到有多少张图片要摆放
function imgLocation(parent, content) {
    var cparent = document.getElementById(parent)
    var ccontent = getChildElement(cparent, content)
    var imgWidth = ccontent[0].offsetWidth
    // 获取窗口宽度
    var num = Math.floor(document.documentElement.clientHeight / imgWidth)
    cparent.style.width =  `${imgWidth * num}px`
    // 拿到第二行的第一张图片，放到第一行高度最小的图片
    var BoxHeighArr = []
    for(var i = 0 ; i < ccontent.length ; i++) {
        if(i < num) {
            BoxHeighArr[i] = ccontent[i].offsetHeight
        }else {
            // 可以将Math里的min方法借给数组取用
            var minHeight = Math.min.apply(null, BoxHeighArr)
            var minIndex = getMinHeightLocation(BoxHeighArr, minHeight) 
            ccontent[i].style.position = 'absolute'
            ccontent[i].style.top = minHeight + 'px'
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px'
            BoxHeighArr[minIndex] = BoxHeighArr[minIndex] + ccontent[i].offsetHeight
        }
    }
}



function getChildElement(parent, content) {
    var contentArr = []
    var allContent = parent.getElementsByTagName('*')
    // 代码容错性
    for (var i = 0; i < allContent.length; i++) {
        if(allContent[i].className == content ) {
            contentArr.push(allContent[i])
        }
    }
    return contentArr
}

function getMinHeightLocation(BoxHeighArr, minHeight) {
    for (var i = 0; i < BoxHeighArr.length ; i++ ) {
        if (BoxHeighArr[i] === minHeight) {
            return i
        }
    }
}