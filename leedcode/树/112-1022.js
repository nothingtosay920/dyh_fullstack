// https://leetcode-cn.com/problems/path-sum/

// 路径总和
// 递归第2层
var hasPathSum = function(root, sum) {
    if (!root) return false
    if (root.left == null && root.right == null) return sum == root.val
    console.log(sum - root.val);
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};


