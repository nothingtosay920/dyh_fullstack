// https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/
// 数组中数字出现的次数 2
// 136 137 260 位运算 异或

// 呵呵 不是位运算
var singleNumber = function(nums) {
  let set = new Set(nums)
  function sum (nums) {
    let res = 0
    for (let i of nums) {
      res += i
    }
      return res
  }
  return ( ( 3 * sum(set) -  sum(nums)) / 2 )
};

// https://leetcode-cn.com/problems/single-number-ii/solution/single-number-ii-mo-ni-san-jin-zhi-fa-by-jin407891/

// 弟弟
var singleNumber = function(nums) {
  let set = new Set(nums)
  for (let i of set) {
    let index = nums.indexOf(i)
    nums.splice(index, 1)
    if (nums.indexOf(i) == -1) {
      return i
    }
  }
 };


