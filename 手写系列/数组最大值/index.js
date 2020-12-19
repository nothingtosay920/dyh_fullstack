let array = [3, 1, 3, 2, 0]
// console.log(Math.max(...array));
// console.log(Math.min(...array));


// function max(arr) {
//   let max = arr[0]
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//     }
//   }
//   return max
// }

//  reduce
function max(prev, next) {
  return Math.max(prev, next)
}

// eval
let max = eval("Math.max(" + array + ")")

// apply
Math.max.apply(null, array)