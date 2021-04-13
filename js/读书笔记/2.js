// 合并二维有序数组成一维有序数组，归并排序的思路
function merge (arr1, arr2) {
  const result = []
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift())
    } else {
      result.push(arr2.shift())
    }
  }
  return result.concat(arr1).concat(arr2)
}

function mergefunction (arr) {
  if (!arr.length) {
    return []
  }
  while (arr.length > 1) {
    let arr1 = arr.shift()
    let arr2 = arr.shift()
    let mergeArr = merge(arr1, arr2);
    arr.push(mergeArr);
  }
  return arr[0]
}