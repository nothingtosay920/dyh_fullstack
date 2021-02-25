

var permute = function (nums) {
  const len = nums.length
  const curr = []
  const res = []
  const visited = {}

  function dfs (nth) {
    if (nth === len) {
      res.push(curr.slice())
    }

    for (let i = 0 ; i < len ; i++) {
      if (!visited[nums[i]]) {
        visited[nums[i]] =  1
        curr.push(nums[i])
        dfs(nth + 1)
        // nums[i] 让出位置
        curr.pop()
        visited[nums[i]] = 0
      }
    }
  }

  dfs(0)
  return res
}