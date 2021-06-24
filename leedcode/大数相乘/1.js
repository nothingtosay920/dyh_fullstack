var multiply = function(num1, num2) {
  var len1 = num1.length;
  var len2 = num2.length;
  var len = len1 + len2;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = 0;
  }
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  for (var i = len1 - 1; i >= 0; i--) {
    for (var j = len2 - 1; j >= 0; j--) {
      // var mul = (num1[i] - "0") * (num2[j] - "0");
      var mul = (num1[i]) * (num2[j]);
      var pos1 = i + j;
      var pos2 = i + j + 1;
      var sum = mul + res[pos2];
      //此处有坑，注意向下取整  javascript 的除号不是整除   是正常的除法
      res[pos1] += Math.floor(sum / 10);
      res[pos2] = sum % 10;
    }
  }
  console.log(res);
  //除去开头的0，将剩下的变成字符串
  var ans = "";
  for (var i = 0; i < len; i++) {
    if (res[i] !== 0) {
      for (var j = i; j < len; j++) {
        ans += res[j];
      }
      return ans;
    }
  }
};


multiply('125', '4')
