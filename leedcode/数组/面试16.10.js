// https://leetcode-cn.com/problems/living-people-lcci/
// 生存人数

// 高配
var maxAliveYear = function(birth, death) {
  let arr = new Array(2001).fill(0)
  for( let i = 0 ; i < birth.length ; i ++ ){
      for( let j = birth[i] ; j <= death[i] ; j ++ ){
          arr[j] += 1
      }
  }
  return arr.indexOf(Math.max(...arr))
}


// 低配
var maxAliveYear = function(birth, death) {
  birth.sort()
  death.sort()
  let arr = []
  for (let i = 0; i < birth.length; i++) {
    let count = 0
    for (let j = 0; j <= i; j++ ) {
      if (death[j] >= birth[i]) {
        count++
      }
    }    
    arr.push(count)
  }
  var contrast = -Infinity;
  var iIndex = -1;
  for(var i=0;i<arr.length;i++){
      if(arr[i]>contrast){
          contrast = arr[i];
          iIndex = i;
      }
    
  }
  return birth[iIndex]
};