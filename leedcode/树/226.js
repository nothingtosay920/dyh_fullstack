var invertTree = function(root, arr = []) {
    if(root) {
        arr.push(root.val)
        if (root.left && root.right) {
            let a = null
            a = root.left
            root.left = root.right
            root.right = a 
        }
        preorderTraversal(root.left, arr)
        preorderTraversal(root.right, arr)
      }
      return arr
};