let array = [1, 2, 1, 1, '1']

function unique(arr) {
  let res = arr.concat().sort().filter(function (item, index, arr) {
    // return arr.indexOf(item) == index
    return !index || item != arr[index - 1]
  })
  return res
}

// es6
function unique2(arr) {
  // return Array.from(new Set(arr))
  return [...new Set(arr)]
}

let unique3 = (a) => [...new Set(arr)]