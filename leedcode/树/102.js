// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

// 层序遍历
var levelOrder = function(root, father = null,arr = []) {
  if (!root) return null
  let a1 = []
  if (!father) {
    a1.push(root.val)
  } else {
    a1.push(levelOrder(root.left, father), levelOrder(root.right, father))
  }
  father = root.val
  arr.push(a1)
  return root.val
};
