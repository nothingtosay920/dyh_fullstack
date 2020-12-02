// https://leetcode-cn.com/problems/increasing-order-search-tree/
// 递增循序查找树
var increasingBST = function(root) {
    let array = []
    var diff = function (node) {
        if (node === null) {
            return
        }
        diff(node.left)
        array.push(node.val)
        diff(node.right)
    }
    diff(root)
    if (array.length > 0) {
        let newRoot = new TreeNode(array[0])
        let returnRoot = newRoot
        for (let i = 1; i < array.length; i++) {
            newRoot.right = new TreeNode(array[i])
            newRoot = newRoot.right
        }
        return returnRoot
    } else {
        return []
    }
};