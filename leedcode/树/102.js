// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

// 层序遍历
var levelOrder = function(root) {
  // 顶不住 多复习
  let arr = []
  if (!root) return arr
  let q = []
  q.push(root)
  while (arr.length) {
    arr.push([])
    const currentLevel = arr.length
    for (let i = 1; i < currentLevel; i++) {
      const node = q.shift()
      arr[arr.length - 1].push(node.val)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
  }
  return arr
};


// 按照原本的逻辑写出题目 