function unique(arr, isSorted, iteratee) {
  let res = []
  let seen = []
  for (let i = 0; i < arr.length; i++) {
    let value =arr[i]
    let computed = iteratee ? iteratee(value) : value
    if (isSorted) {
      if (!i || seen !== computed) {
        res.push(value)
      }
      seen = computed
    } else if (iteratee) {
      if (seen.indexOf(computed) === -1) {
        seen.push(computed)
        res.push(value)
      }
    } 
    else if(res.indexOf(value) === -1) {
        res.push(value)
    }
  } 
  return res
}