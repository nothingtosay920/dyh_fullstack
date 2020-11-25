let preorderTraversal  = (root, arr = []) => {
    if(root) {
      arr.push(root.val)
      preorderTraversal(root.left, arr)
      preorderTraversal(root.right, arr)
    }
    return arr
  }
