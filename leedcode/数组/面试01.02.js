// https://leetcode-cn.com/problems/check-permutation-lcci/
// 判断是否互为字符重排

var CheckPermutation = function(s1, s2) {
  //长度不对等,肯定不行的
  if(s1.length!=s2.length){
      return false;
  }
  s2 = s2.split('');
  //直接循环
  for(let s of s1){
      if(s2.indexOf(s)==-1){
          return false;
      }else{
          s2.splice(s2.indexOf(s),1);
      }
  }
  return true;
};

// splice 直接删掉找到的数