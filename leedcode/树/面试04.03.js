// https://leetcode-cn.com/problems/list-of-depth-lcci/
// 特定深度节点列表

var listOfDepth = function(tree, aswer = []) {
  if (!tree) return 
  let arr = []
  arr.push(tree.val)
  arr.push(listOfDepth(tree.left), )
};


// 有缘再写