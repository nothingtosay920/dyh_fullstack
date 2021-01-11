// https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
// 二维数组中的查找
// 暴力 弟弟
var findNumberIn2DArray = function(matrix, target) {
  const rowNum = matrix.length;
  if (!rowNum) {
      return false;
  }
  const colNum = matrix[0].length;
  for (let i = 0; i < rowNum; i++) {
      for (let j = 0; j < colNum; j++) {
          if (matrix[i][j] === target) return true;
      }
  }

  return false;
};
