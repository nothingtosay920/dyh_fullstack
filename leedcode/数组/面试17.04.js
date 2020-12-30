// https://leetcode-cn.com/problems/missing-number-lcci/
// 消失的数字
var missingNumber = function(nums) {
  var a =0 ;//因为数组少了一项，所以将结果初始值设为0，i从1开始遍历到n
  for(var i =1;i<=nums.length;i++){ //
      a = a ^ nums[i-1] ^ i
  }
  return a;
};
