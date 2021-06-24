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

Array.prototype.unique = function () {
  const newArray = [];
  const tmp = new Map();
  for(let i = 0; i < this.length; i++){
        if(!tmp.get(this[i])){
            tmp.set(this[i], 1);
            newArray.push(this[i]);
        }
    }
    return newArray;
}

function unique(arr) {
  let res = arr.concat().sort((a, b) => a - b).filter(function (item, index, arr) {
    // return arr.indexOf(item) == index
    return !index || item != arr[index - 1]
  })
  return res
}