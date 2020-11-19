// 1. 两者类型相同,相同的话比大小
// 2. 类型不同,那么就进行类型转换
// 3. 会判断是否在对比null和undefined,是的话转回true
// 4. 判断两者是否string和number,是的话string转为number
// 5. 判断一方是否为boolean,是的话把boolean转为number
// 6. 判断一方是否为object,且一方为string,number,Symbol是的话把object转为原始类型在进行判断



// [] = []
// 引用类型比较地址


// [] = ![]
// [] = !true     [] 转原始类型 true
// [] = false     !true => false
// [] = 0         5条 
// '' = 0         '' 转number 0
//  0 = 0

// 闭包
// for 循环是同步代码  原因每一次循环均不耗时
for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i*1000)    
}
// 6 6 6 6 6

// 处理办法1: 定OA 自OA GO j每次都保存
for (var i = 1; i <= 5; i++) {
    (function (j) {
        setTimeout(
            function () {
                console.log(j);
        }, j*1000)   
    })(i) 
}
// 第三个参数 学
for (var i = 1; i <= 5; i++) {
        setTimeout(
            function timer(j) {
                console.log(j);
        }, 
        i*1000,
        i
        )   
}