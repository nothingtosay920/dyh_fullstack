let maxProfit = function(prices) {
  let max = 0, minprice = prices[0]
  for(let i = 1; i < prices.length; i++) {
      minprice = Math.min(prices[i], minprice)
      max = Math.max(max, prices[i] - minprice)
  }
  return max
}

var maxProfit = function(prices) {
  if (!prices || !prices.length) return 0

   let min = Number.MAX_SAFE_INTEGER, max = 0

   for (let i = 0, price; i < prices.length; i++) {
       price = prices[i]
       min = Math.min(min, price)
       max = Math.max(max, price - min)
   }

   return max
}