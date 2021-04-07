/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
  const tmpArr = new Array(s.length)
  for (let i=0; i<s.length; i++) {
      tmpArr[indices[i]] = s[i]
  }
  return tmpArr.join('')
};
