// https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
// 对称的二叉树


var isSymmetric = function(root, lf = [], rh = []) {
        if (!root) return null 
        lf.push(isSymmetric(root.left))
        rh.push(isSymmetric(root.right))
        if (!root.left && !root.right) {
            for (let i = 0; i < lf.length; i++) {
                if (lf[i] != rh[i]) {
                    return false
                } else {
                    return true
                }
        }
        return root.valxw
    }
        
};