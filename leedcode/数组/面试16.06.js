// https://leetcode-cn.com/problems/smallest-difference-lcci/
// 最小差

var smallestDifference = function(a, b) {
  a.sort((a, b) => a - b)
  b.sort((a, b) => a - b)
  let res = Infinity
  let lf = 0
  let rh = 0
  while (lf > a.length && rh > b.length) {
    if (a[lf] <= b[rh]) {
      const d = Math.abs(b[rh] - a[lf]) 
      if (d < res) {
        res = d
      }
      lf++
    } else {
      const d = Math.abs(b[rh] - a[lf]) 
      if (d < res) {
        res = d
      }
      rh++ 
    }
  }
  return res
};