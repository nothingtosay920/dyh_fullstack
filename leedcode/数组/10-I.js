





function selectionSort(arr) {
  const list = []
  for (let i = 0; i < arr.length; i++) {
    let j = list.length - 1
    while (list[j]) {
      if (list[j] < arr[i]) {
        return
      } else {
        j--
      }
    }
    while (j < list.length) {
      
    }
  }
  return arr
}

console.log(selectionSort([1,3,2,2.5,4,3.5,5]));