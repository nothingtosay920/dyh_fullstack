// https://leetcode-cn.com/problems/find-majority-element-lcci/
// 主要元素
var majorityElement = function(nums) {
  nums.sort((a, b) => {
      return a - b
  })
  const len = nums.length
  if (nums[0] == nums[(len - 1 ) / 2] || nums[(len-1)/2] == nums[len-1]) {
      return nums[(len - 1 ) / 2]
  }
  else if (nums[len/2-1] && nums[len/2-1] == nums[len/ 2]) {
       return nums[len/2 -1]
      }
  
  return -1
}