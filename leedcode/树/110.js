// 平衡二叉树
var isBalanced = function(root, count = 0) {
    if (!root) {
        return 
    }
    count++
    isBalanced(root.left, count)
    isBalanced(root.right, count)
    return 
};