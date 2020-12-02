// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/

// var kthLargest = function(root, k, arr=[]) {
//     if (root == null) {
//         return null
//     }
//     arr.push(root.val)
//     kthLargest(root.left)
//     kthLargest(root.right)
//     arr.sort()
//     return arr[arr.length - k]
// };

var kthLargest = function(root, k) {
    let setArray = new Set()
    const dfs = function(node) {
        if (node === null) {
            return
        }
        setArray.add(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    let array = [...setArray]
    array.sort((a,b) => {
        return b - a
    })
    return array[k - 1]
};

// 用set去重 结构给数组 sort