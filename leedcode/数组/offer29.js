// https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
// 顺时针打印矩阵


const spiralOrder = (matrix) => {
  if (matrix.length == 0) return [];
  const res = [];

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    if (top > bottom || left > right) break;

    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
};

// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 绕圈圈  学