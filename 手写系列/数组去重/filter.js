let array = [1, 2, undefined,1,undefined, 1, '1']



// es6
function unique2(arr) {
  // return Array.from(new Set(arr))
  return [...new Set(arr)]
}


console.log(unique(array));