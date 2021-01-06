// https://leetcode-cn.com/problems/contiguous-sequence-lcci/

// 动态规划
maxSubArray = function (nums) {
  let len = nums.length
  let dp = []
  if (nums) return len
  dp[0] = nums[0]
  let result = dp[0]
  for (let i = 0; i < len; i++) {
    dp[i] = Math.max(dp[ i - 1 ] + nums[i], nums[i])    
    if (dp[i] > result) {
      result = dp[i]
    }
  }
  return result
  }

  // 贪心
var maxSubArray = function (nums) {
  let result = 0
  let count = 0
  let len = nums.length
  for (let i = 0; i < len; i++) {
    count += nums[i]    
    if (count > result) {
      result = count
    }
    if (count <= 0) {
      count = 0
    }
  }
  return result
}


var maxSubArray = function(nums) {
  const arr = []
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (i == 0) {
      arr.push(nums[i])
    } else {
      if (nums[i] > arr[arr.length - 1] && arr[arr.length - 1] <= 0) {
        arr.push(nums[i])
      } else if(nums[i] <= arr[arr.length - 1] ) {
       const val =  arr[arr.length - 1] + nums[i]
       arr.push(val)
      } else if (nums[i] > arr[arr.length - 1] && arr[arr.length - 1] > 0) {
          const val =  arr[arr.length - 1] + nums[i]
       arr.push(val)
      }
    }
  }

  return Math.max(...arr)
};