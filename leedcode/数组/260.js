// https://leetcode-cn.com/problems/single-number-iii/
// 只出现一次的数字III

var singleNumber = function(nums) {
  let set = new Set(nums)
  function sum (nums) {
    let res = 0
    for (let i of nums) {
      res += i
    }
      return res
  }
  function product (nums) {
    let res = 1
    for (let i of nums) {
      res *= i
    }
    return res
  }
  // 求和
  let asum = 2 * sum(set) - sum(nums) 
  let p = product(nums) / product(set)
  let aproduct = product(nums) / (p**2) 
};