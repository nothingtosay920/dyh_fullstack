// 在规定的时间内只触发一次
function throttle(fn, delay) {
    let prev = Date.now() // 上一次点击
    return function () {
        let now = Data.now() // 这一次点击
        fn()
    }
}