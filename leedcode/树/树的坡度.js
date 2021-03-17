var findTilt = function(root) {
  let slopeArray = [] // 用于存储所有非空节点的坡度
  let depthDiff = function (node) {
      if (node === null) {
          return 0 // 返回节点的 val 和，空节点即为 0
      }
      let L = depthDiff(node.left) // 处理左节点
      let R = depthDiff(node.right) // 处理右节点
      slopeArray.push(Math.abs(L - R)) // 记录当前节点的坡度
      return L + R + node.val // 返回当前节点的所有 val 和
  }
  depthDiff(root)
  // 遍历计算所有坡度的总和
  let slopeNum = 0
  for (let i = 0; i < slopeArray.length; i++) {
      slopeNum += slopeArray[i]
  }
  return slopeNum
};