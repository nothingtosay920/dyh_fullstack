// 平衡二叉树
var isBalanced = function(root) {
    function recur(root) {
        if (root ==  null) return 0
        let lf = recur(root.left)
        if (lf == -1) return -1 
        let rh = recur(root.right)
        if (rh == -1) return -1
        return Math.abs(lf - rh) < 2 ? Math.max(lf, rh) + 1 : -1
    }
    return recur(root) != -1
};


// 思路不同 多做吧