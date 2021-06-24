// 在规定的时间内只触发一次



function throttle(fn, interval) {
    let flag = true
    return function(...args) {
        const context = this
        if (!flag) return
        flag = false
        setTimeout(() => {
            fn.apply(context, args)
            flag = true
        }, interval)
    }
}

const img = document.getElementsByTagName('img')
let count = 0

window.addEventListener('scroll', lazyLoad)

function lazyLoad() {
    let viewHeight = document.documentElement.clientHeight
    let scrollTop = document.documentElement.scrollHeight
    for (let i = count; i < nums; i++) {
        if (img[i].offsetHeight < scrollTop + viewHeight) {
            if (img[i].getAttribute('src') !== 'defalut.jpg') continue
            img[i].src = img[i].getAttribute('data-src')
            count++
        }        
    }
}