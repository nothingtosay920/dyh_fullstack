// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

// 层序遍历
var levelOrder = function(root) {
  const ret = [];
  if (!root) {
      return ret;
  }

  const q = [];
  q.push(root);
  while (q.length !== 0) {
      const currentLevelSize = q.length;
      ret.push([]);
      for (let i = 1; i <= currentLevelSize; ++i) {
          const node = q.shift();
          ret[ret.length - 1].push(node.val);
          console.log(ret)
          if (node.left) q.push(node.left);
          if (node.right) q.push(node.right);
      }
  }
      
  return ret;
};

// 按照原本的逻辑写出题目 