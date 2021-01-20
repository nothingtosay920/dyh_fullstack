var arr = Array(3)
arr[0] = 2
arr[1] = undefined
var arr2 = arr.map(function (elem) {
  return '1'
})

console.log(arr2);