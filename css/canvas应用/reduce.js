let arr2 = [1,2,3,4,5,6]
// 循环 + 迭代(叠加)
// 1 pre => 0 item:1 =>1
// 2 pre => 1 item:2
let sum = arr2.reduce((pre, item) => {
    return pre + item
}, 0)
// object.assign()
let arr3 = [{a:1}, {b:2}, {c:3}]
let arr4 = arr3.reduce((pre, item) => {
    return {...pre,...item}

}, {})
