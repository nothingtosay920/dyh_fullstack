// 根据二叉树创建字符串

// https://leetcode-cn.com/problems/construct-string-from-binary-tree/

var tree2str = function (t, newVal) {
    if (!t) return ""
    newVal = t.val
    let lf = tree2str(t.left)
    let rh = tree2str(t.right)
    if (t.left) {
        lf = '(' + lf + ')'
    } 
    if(t.right) {
        rh = '(' + rh + ')'
    }
    if (t.left == null && t.right) {
        lf = "()"
    }
    return newVal + lf + rh
};