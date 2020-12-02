// 二叉树最大深度

var maxDepth = function(root) {
    if (!root) return 0
    let lh = maxDepth(root.left)
    let rh = maxDepth(root.right)
    return Math.max(lh, rh) + 1
};