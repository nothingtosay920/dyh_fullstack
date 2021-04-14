const isSubsequence = (subStr, str) => {
  if (subStr.length == 0) return true;
  let index = 0;
  let subIndex = 0;
  while (index < str.length) {           
    if (subStr[subIndex] == str[index]) {
      subIndex++;                         
      if (subIndex > subStr.length - 1) { 
        return true;                      
      }
    }         
    index++;   
  }
  return false;
};
// 双指针