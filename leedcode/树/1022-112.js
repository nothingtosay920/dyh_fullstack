// https://leetcode-cn.com/problems/sum-of-root-to-leaf-binary-numbers/
// 从根到叶二进制之和

var sumRootToLeaf = function (root, val = '') {
    if(!root) return 0
    val += root.val
    if (!root.left && !root.right) {
        return parseInt(Number(val), 2)
    }
    return sumRootToLeaf(root.left, val) + sumRootToLeaf(root.right, val)
};

// 有缘再写
