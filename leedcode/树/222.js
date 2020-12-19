// https://leetcode-cn.com/problems/count-complete-tree-nodes/

// 完全二叉树的节点个数

var countNodes = function(root) {
  let arr = 0
  if (!root) return 0
  let q = []
  q.push(root)
  while (q.length != 0) {
    const currentLevel = q.length
    for (let i = 1; i < currentLevel; i++) {
      const node = q.shift()
      arr++
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
  }
  return arr  
};