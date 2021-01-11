// https://leetcode-cn.com/problems/contains-duplicate/
// 存在重复元素

  var containsDuplicate = function(nums) {
    let set = new Set(nums)
    let size = set.size
    let len = nums.length
    if (size && size !== len) {
        return true
    } 
    return false
};