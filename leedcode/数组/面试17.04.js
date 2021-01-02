// https://leetcode-cn.com/problems/missing-number-lcci/
// 消失的数字
var missingNumber = function(nums) {
  var a =0 ;//因为数组少了一项，所以将结果初始值设为0，i从1开始遍历到n
  for(var i =0;i<=nums.length;i++){ //
      a = a ^ nums[i] ^ i
  }
  return a;
};
// 例:[1, 2, 4]
// 0 ^1^0 ^2^1 ^4^2 ^undefined^3 == 3