// 739题

const dailyTemperatures = (T) => {
  const res = new Array(T.length).fill(0)
  const stack = []
  for (let i =0;  i < T.length ; i++) {
    while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
      // 将栈顶的温度对应的索引出栈
      const top = stack.pop()
      // 计算当前栈顶的温度值与第一个高于它的温度值的索引的差
      res[top] = i - top
    }
    stack.push(i)
  }
  return res
}