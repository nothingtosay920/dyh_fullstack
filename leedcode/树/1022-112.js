// https://leetcode-cn.com/problems/sum-of-root-to-leaf-binary-numbers/
// 从根到叶二进制之和

var sumRootToLeaf = function (root, val, arr = []) {
    function getValue(root, str = "") {
        if (!root) return arr.push(str)
        str += root.val
        getValue(root.left)
        getValue(root.right)
    }
    getValue(root)
    arr.forEach(element => {
        val += parseInt(element, 2)
    });
    return val
};

// 有缘再写
