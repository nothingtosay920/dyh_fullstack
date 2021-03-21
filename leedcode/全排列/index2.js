// 给定一个不含重复元素的整数数组 nums 返回数组所有可能的子集
nums = [1,2,3]


var permute = function(nums) {
  let res = []

  function fule (path) {
    if(path.length === len) return res.push(path.slice())
    for (const i of nums) {
      if (path.indexOf(i) === -1) {
        path.push(i)
        fule(path)
        path.pop()
      }
    }
  }
  fule([])
  return res
};
