
 var removeOuterParentheses = function(S) {
  let count = 0, ans = '';
  for (let i = 0; i < S.length; i++) {
      if(S[i] === '(' && count++ > 0) ans += '('
      if(S[i] === ')' && count-- > 1) ans += ')';
  }
  return ans;
};
