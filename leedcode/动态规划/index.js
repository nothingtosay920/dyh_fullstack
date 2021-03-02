// 假设你正在爬楼梯 需要n阶才能到达楼顶 每次爬 1 - 2 个台阶 问有多少种方法到达

n = 2
// 1 + 1
// 2

n = 3
// 1 + 1 + 1
// 1 + 2
// 2 + 1

// 给出达到某个目的方案个数
// 倒着分析问题：1 定位到问题的终点 2 站在终点的视角来分析问题

f(1) = 1
f(2) = 2

const f = []
const climbStairs = function (n) {
  if (n == 1) {
    return 1
  }
  if (n == 2) {
    return 2
  }

  // 递归计算 记忆化搜索
  if (f[n] == undefined) {
    return f[n] = climbStairs(n - 1) + climbStairs(n - 2)
  }
  return f[n]
}


// 动态规划 自底向上
// f(n) = f(n - 1) + f(n - 2)

const climbStairs = function (n) {
  const f = []
  f[1] = 1
  f[2] = 2
  
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 2] + f[i - 1]
  }

  return f[n]
}


// 最优子结构 
// 重叠子问题