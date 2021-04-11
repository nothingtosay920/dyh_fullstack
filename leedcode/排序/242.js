
// https://leetcode-cn.com/problems/valid-anagram/solution/you-xiao-de-zi-mu-yi-wei-ci-by-leetcode-solution/

var isAnagram = function(s, t) {
  const tl = t.split('')
  for (let i = 0; i < s.length; i++) {
    if (tl.indexOf(s[i]) == -1) {
      return false
    } else {
      const val = tl.indexOf(s[i])
      t.splice(val, 1)
    }
  }
  if (tl.length > 0) {
    return false
  } else {
    return true
  }
};