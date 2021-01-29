// 双端队列 就是允许在队列两端进行插入和删除

// 即允许使用push pop shift unshift

var maxSlidingWindow = function(nums, k) {
  const len = nums.length
  const res = []
  let left = 0
  let right = k - 1
  if (!arr || !arr.length) {
    return
  }
  while(right < len) {
    // 计算左右指针的最大值
    const max = callMax(nums, left, right) 
    res.push(max)
    left++
    right++
  }
};

function callMax(arr, left, right) {
  
  let maxNum = arr[left]
  for (let i = 0; i <= right; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i]
    }
  }
  return maxNum
}

var maxSlidingWindow2 = function(nums, k) {
  const len = nums.length
  const res = []
  // 初始化双端队列
  const deque = []
  for (let i = 0; i < nums.length; i++) {
    while(deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }
    deque.push(i)
    // 当对头的元素索引已经出现在滑动窗口之外
    while(deque.length && deque[0] <= i - k) {
      deque.shift()
    }    
    if (i >= k - 1) {
      res.push(nums[deque[0]])
    }
  }
  return res
}