let array = [0, 1, 2, 3, 1, '1', '1']
// let a = []
// function unique(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (a.indexOf(array[i]) == -1) {
//       a.push(array[i])
//     }
//   }
//   return a
// }
// console.log(unique(array));

// 排序后去重

function unique(arr) {
  let res = []
  let sortedArr = arr.sort((a, b) => a - b) 
  let seen
  for (let i = 0; i < sortedArr.length; i++) {
    // 判断第一个元素或者相邻的元素不相同
    if (!i || seen != sortedArr[i]) {
      res.push(sortedArr[i])
    }
    seen = sortedArr[i]    
  }
  return res
}

console.log(unique(array));