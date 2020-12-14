// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/

// 最近公共祖先
var lowestCommonAncestor = function (root, p, q) {
  if (!root) {
      return null
  }
  if (p.val === q.val) {
      return q
  }
  while (root) {
      if (root.val < q.val && root.val < p.val) {
          root = root.right
      }
      if (root.val > q.val && root.val > p.val) {
          root = root.left
      }
      else {
          return root
      }
  }
};
// 绝了 多刷