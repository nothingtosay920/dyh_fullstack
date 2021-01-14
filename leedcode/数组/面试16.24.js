// https://leetcode-cn.com/problems/pairs-with-sum-lcci/
// 数对和

var pairSums = function(nums, target) {
  let res = [] , map = new Map()
  for( let num of nums ){
      let key = target - num 
      if ( map.has(key) ){
          res.push([key,num])
          let value = map.get(key) - 1
          value ? map.set(key,value) : map.delete(key)
      }else{
          map.set(num,(map.get(num) || 0 ) + 1)
      }
  }
  return res
};