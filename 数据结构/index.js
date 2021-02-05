// 给定一个不含重复元素的整数数组 nums 返回数组所有可能的子集
// nums = [1, 2, 3]

// [
//   [1],
//   [2],
//   [3],
//   [1, 2],
//   [1, 3],
//   [2, 3],
//   [1, 2, 3],
//   []
// ]

// 穷举 DFS 树形思维方式 递归 (递归边界)

const subsets = function(nums) {
  const res = []
  const len = nums.length
  const subset = [] // 组合数组

  dfs(0)
  function dfs(index) { // 找子集
    res.push(subset.slice())

    for (let i = index; i < len; i++) {
      subset.push(nums[i])      
      dfs(i + 1)
      subset.pop()
    }
  }
  return res
}