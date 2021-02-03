// 全排列
var permute = function (nums) {
  const len = nums.length
  const cur = []
  const res = []
  const visited = {}

  function dfs(nth) {
    if (nth == len) { // 出口
      res.push(cur.slice())
      return 
    }
    // 检查手中的数字有哪些
    for (let i = 0; i < len; i++) {
      if (!visited[nums[i]]) {
        visited[nums[i]] = 1 // 打标识
        cur.push(nums[i])
        dfs(nth + 1)
        // nums[i] 让出
        cur.pop()
        visited[nums[i]] = 0
      }      
    }
  }
  dfs(0)
  return res
}