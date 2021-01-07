// https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
// 在排序数组查找数字出现的次数

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
  let index = nums.indexOf(target)
  let count = 0
  if ( index !== -1) {
   for (let i = index ; i < nums.length; i++) {
     if (nums[index] == nums[i]) {
       count++
     }
   }
  }
  return count
 };






// 弟弟
var search = function(nums, target) {
  let res = 0
  while ( nums.indexOf(target) !== -1) {
    res++
     nums.splice(nums.indexOf(target), 1)
    console.log(nums)
  }
  return res
};