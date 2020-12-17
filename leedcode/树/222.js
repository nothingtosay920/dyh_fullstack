// https://leetcode-cn.com/problems/count-complete-tree-nodes/

// 完全二叉树的节点个数

var countNodes = function(root, count = 1) {
  if (!root) return 
  countNodes(root.left, count++)
  countNodes(root.right, count++)
  return count    
};