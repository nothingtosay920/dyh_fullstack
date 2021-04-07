


var canMakeArithmeticProgression = function(arr) {
  arr.sort(function(a,b){return a - b});
  var flag = arr[1] - arr[0];
  for(var i = 1 ; i < arr.length ; i ++){
      if(flag != arr[i] - arr[i - 1]){
          return false;
      }
  }
  return true;
};

// 排列条件 等差

