// https://leetcode-cn.com/problems/string-rotation-lcci/
var isFlipedString = function(s1, s2) {
  return s1.length === s2.length && (s2 + s2).includes(s1)
};