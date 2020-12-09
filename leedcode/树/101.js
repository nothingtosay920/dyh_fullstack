// https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/

// 对称的二叉树


var isSymmetric = function(root) {
    function compare(left, right) {
        if (left == null && right != null) return false
        if (left != null && right == null) return false 
        if (left == null && right == null) return true        
        if (left.val != right.val) return false 
        let outside = compare(left.left, right.right)
        let inside = compare(left.right, right.left)
        let isSame = outside && inside        
        return isSame
    }        
    if (root == null) {
        return true
    }
    return compare(root.left, root.right)
};