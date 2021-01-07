// 字符串反转
// const str = 'maosen'
// const res = str.split('').reverse().join('')

// 判断一个字符串是回文字符串
let str = 'yeslsey'

// function isPalindrome(str) {
  // 1.0
  // const res = str.split('').reverse().join('')
  // return res === str

  // 2.0
  // const len = str.length
  // let mid = parseInt(len / 2)
  // for (let i = 0; i < mid; i++) {
  //   if (str[i] !== str[len - i]) {
  //     return false
  //   }  
  // }  
  // return true

// }

// 给定一个非空字符串s 最多删除一个字符串 判断能否成为回文
// 双指针
function validPalindrome (str) {
  let flag = isPalindrome(str)
  if (!flag) {
    while (i < len && !flag) {
      let arrStr = str.split('')
      arrStr.splice(i, 1)
      i++
      let newStr = arrStr.join('')
      flag = isPalindrome(newStr)
    }
  }
  
  return flag
}

var validPalindrome = function (str) {
  let i = 0, j = str.length - 1
  while (i < j) {
    if (str[i] != str[j]) {
      return isPalindrome(str, i + 1, j) || isPalindrome(str, i, j - 1)
    }
    i++
    j--
  }
  return true
}