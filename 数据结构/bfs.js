function BFS() {
  const queue = []
  // 入口坐标入队
  queue.push(root)
  // 队列不为空
  while (queue.length) {
    const top = queue[0] // 取出对头元素
    // 访问top
    console.log(top.val);
    // 检查 从top 出发还能遍历所有元素
    // for(从top 出发还能遍历到的元素) {
    //  queue.push(top还能遍历的元素)
    // }
    if (top.left) {
      queue.push(top.left)
    }
    if (top.right) {
      queue.push(top.right)
    }

    queue.shift() // 访问完毕
  }
}