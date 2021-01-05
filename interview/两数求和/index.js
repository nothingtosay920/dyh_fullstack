// 给定一个整数数组nums 和 一个目标值 target, 在该数组中和为target 的 两个整数 返回他们的下标

let nums = [2, 7, 11, 15]
let target = 9
// [0, 1]

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target ) {
        return [i, j]
      }    
    }
  }
}

var twoSum = function (nums, target) {
  const diffs = {}
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (diffs[target - nums[i]] !== undefined) {
      return [diffs[target - nums[i]], i]
    }    
    diffs[nums[i]] = i
  }
}

var twoSum=function (nums,target){
  const map=new Map()
  for(let i=0;i<nums.length;i++){
      let n=nums[i]
      let n2= target-nums[i]
      if(map.has(n2)){
        return [map.get(n2),i]
      }else{
          map.set(n,i)
      }
  }
}

// 100 分 双指针
// 给定两个有序的整数数组nums1 和 nums2 将 nums2 合并到 nums1 
// 使得 nums1 成为一个有序的数组
// 1. 定义2个指针 分别指向两个数组生效的部分的 尾部
// 2. 每次只对指针所指的元素进行比较, 取其中较大的元素, 把他从num1的末尾往前填补
// 3. 

const merge = function (nums1, m, nums2, n) {
  let i = m - 1 
  let j = n - 1 
  let k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i]
      i--
      k--
    } else {
      nums1[k] == nums2[j]
      j--
      k--
    }
  }

  // nums2有剩余
  while (j >= 0) {
    nums1[k] = nums1[j]
  }
}