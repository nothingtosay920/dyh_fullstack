let array = [1, 2, 3, 4, 1, '1']

function unique(arr) {
  let res = []
  for (let i = 0; i < array.length; i++) {
    for (var j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        break
      }      
    }    
    if (j === res.length) {
      res.push(arr[i])
    }
  }
  return res
}