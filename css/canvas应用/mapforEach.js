let arr = [{a:1}, {a:2}]
// map 映射
// [1, 2, 3]
// 没有命令的感觉
// 用来生成东西
let newarr = arr.map((item)=>{
    // console.log(item);
    return item.a
})
let arr1 =  arr.map((item)=>{
    return `<li>${item.a}</li>`
})
arr.forEach((item)=>{
    console.log(item);
})