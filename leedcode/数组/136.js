// https://leetcode-cn.com/problems/single-number/
// 只出现一次数字

var singleNumber = function(nums) {
  let res = 0
  for (let i of nums) {
    res ^= i
  }
  return res
};