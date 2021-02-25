// https://leetcode-cn.com/problems/compress-string-lcci/

var compressString = function(S) {
  let num = 0
  let left = 0
  let len = S.length
  let right = 0 
  let res = ''

  while (!(right == len )) {
    if (S[left] == S[right]) {
      num++
      right++
    } else {
      res += S[left] + num
      left += num
      num = 0
    }
  }
  res += S[left] + num
      left += num
    if (res.length < len ) {
        return res
    }
  return S
};

var compressString = function(S) {
  let count=1;
  let str = new String() ;
  for(let i = 1 ; i < S.length+1 ; i++){
      if(S[i-1] === S[i]){
          count++
      }else{
          str +=S.slice(i-1,i )+ count
          count = 1
      }
  }
  return S.length > str.length ? str : S
};