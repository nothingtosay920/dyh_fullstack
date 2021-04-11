


var minCostClimbingStairs = function(cost) {
  let dp = []
  dp[0] = cost[0]
  dp[1] = cost[1]
  for (let i = 2; i < cost.length+1; i++) {
    dp[i] = Math.min(dp[i-1], dp[i-2]) + (cost[i] ? cost[i] : 0)
  }
  return dp[cost.length]
};

// 1 100 1000 1 100 1
// dp[n] = min(dp[n-1], dp[n-2])