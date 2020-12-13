// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/

// 最近公共祖先
var lowestCommonAncestor = function (root, p, q) {
  let arr = []
  let arr1 = []
  let asw = null
  function mywork(root, p, q, father = null) {
    if (!root) return
    if (root.left == p) {
      arr.push(root.left.val, root.val, father)
    }
    if (root.left == q) {
      arr.push(root.left.val, root.val, father)
    }
    if (root.right == p) {
      arr1.push(root.right.val, root.val, father)
    }
    if (root.right == q) {
      arr1.push(root.right.val, root.val, father)
    }
    father = root.val
    mywork(root.left, p, q, father)
    mywork(root.right, p, q, father)
  }
  mywork(root, p, q)
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arr1[i]) {
        asw = i
      }    
  }
  return arr[i]
};