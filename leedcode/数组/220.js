// https://leetcode-cn.com/problems/contains-duplicate-iii/submissions/
// 存在重复元素III

// 嵌套for循环
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  for(let i=0; i<nums.length-1;i++){
    for(let j=i+1; j<nums.length;j++){
        let x = Math.abs(nums[i]-nums[j])
        let n = Math.abs(i-j)
        if(x <= t && n <= k){
            return true
        }
  }
  }
  return false
};



var containsNearbyAlmostDuplicate = function(nums, k, t) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    if ( arr.length <= k) {
      arr.push(nums[i])
      if (arr.length > k) {
        arr.shift()
      }
      for (let j = 0; j < arr.length; j++) {
        if (Math.abs(nums[i+1] - arr[j]) <= t) {
            console.log(Math.abs(nums[i+1] - arr[j]) > t)
          return true
        }
      }
    }
  }
    return false
};