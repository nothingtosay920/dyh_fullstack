// https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
var reverseWords = function(s) {
  var str = s.trim().split(' ').filter(item => item!='').reverse().join(' ')
  return str
};