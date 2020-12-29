// 树的子结构
// 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
// https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/

// var isSubStructure = function(A, B) {
//   return (A != null && B != null) && (recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))

// };
// function recur(A, B) {
//   if (B == null) return true
//   if (A == null || A.val != B.val ) return false      
//   return recur(A.left, B.left) && recur(A.right, B.right)
// }

var isSubStructure = function(A, B) {
  // 约定空树不是任意一个树的子结构
  if(!A || !B) {
      return false;
  }
  return isSameTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

var isSameTree = function(A, B) {
  // B子树是空子树 ok
  if(!B) {
      return true;
  }
  // A子树是空子树 且 B 非空，不 ok
  if(!A) {
      return false;
  }
  // 当前节点的值不相等，不 ok
  if(A.val !== B.val) {
      return false;
  }
  // 递归考察左子树、右子树
  return isSameTree(A.left, B.left) && isSameTree(A.right, B.right);
};
