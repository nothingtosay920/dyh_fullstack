// https://leetcode-cn.com/problems/minimum-height-tree-lcci/
// 最小高度树

var sortedArrayToBST = function(nums) {
  if(nums.length === 0){
      return null
  }
  let m = parseInt(nums.length / 2)
  let root = new TreeNode(nums[m])
  root.left = sortedArrayToBST(nums.slice(0, m))
  root.right = sortedArrayToBST(nums.slice(m + 1))
  return root
};