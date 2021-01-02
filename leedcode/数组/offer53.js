// https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
var missingNumber = function(nums) {
  var a = 0
  for( let i = 0 ; i <= nums.length ; i++ ) {
      a = a ^ nums[i] ^ i
  }
  return a
};