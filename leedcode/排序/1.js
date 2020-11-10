// function foo() {}
// let arr = [0, 1, 2, 3, 9, -1]
// arr.sort((a, b) => a-b)
// console.log(arr);

let str1 = '2.3.4'
let str2 = '2.3.5'
let nst1 = str1.split('.')
let nst2 = str2.split('.')
let len = Math.max(arr1.length, arr2.length)
for (let i = 0; i < len; i++) {
    if (str1[i] != str2[i]) {
        return str1[i] - str2[i]
    }
}
