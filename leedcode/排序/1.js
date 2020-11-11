// function foo() {}
// let arr = [0, 1, 2, 3, 9, -1]
// arr.sort((a, b) => a-b)
// console.log(arr);
function foo() {
    
let str1 = '1.1'
let str2 = '2.0'
let nstr1 = str1.split('.')
let nstr2 = str2.split('.')
let len = Math.max(nstr1.length, nstr2.length)
for (let i = 0; i < len; i++) {
    let a = nstr1[i] ? nstr1[i] : 0
    let b = nstr2[i] ? nstr2[i] : 0
    a = Number(a)
    b = Number(b)
    if (a != b) {
        return a > b ? 1 : -1
    }
 
}
return 0
}
console.log(foo());