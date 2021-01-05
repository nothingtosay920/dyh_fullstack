// https://leetcode-cn.com/problems/is-unique-lcci/
// 判断字符是否唯一

var isUnique = function(astr) {
  let s = new Set()
  const nums = astr.split('')
  for (let i in nums) {
      s.add(nums[i]);
     
  }
   if(s.size==nums.length) {
        return true
      } else {
        return false
      }
};

var isUnique = function(astr) {
  return new Set(astr).size === astr.length
};
