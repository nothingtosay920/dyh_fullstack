// https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/

var reverseLeftWords = function(s, n) {
  return s.slice(n) + s.slice(0,n)
};