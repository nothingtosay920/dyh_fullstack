let arr = [1, [2, [3, 4]]]
// function faltten (arr) {
//   let result = [] 
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//     result = result.concat(faltten(arr[i]))
//     } else {
//       result.push(arr[i])
//     }
//   }
//   return result
// }

// reduce
// function faltten() {
//   return arr.reduce(function(prev, next) {
//     return prev.concat(Array.isArray(next)) ? reduce(next) : next
//   }, [])
// }

// ... 扩展运算符
function faltten() {
  while(arr.some(item => Array.isArray(item))) {
    arr= [].concat(...arr)
  }
  return arr
}
