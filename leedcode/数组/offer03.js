// https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
// 数组中重复的数字
var findRepeatNumber = function(nums) {
  for (let i = 0 ; i < nums.length ; i++) {
      for (let j = nums.length -1 ; i < j ; j--) {
          if (nums[i] == nums[j]) {
              return nums[i]
          }
      }
  }
};

var findRepeatNumber = function(nums) {
  let s=new Set();
  for(var i in nums){
      var curLenth=s.size;
      s.add(nums[i]);
      if(s.size==curLenth)
      return nums[i];
  }
};
// 使用set,因为set自动忽略重复元素，遍历数组中元素，若长度未增加，则输出当前元素