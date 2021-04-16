// 不要追求完美
// 写好类似leetcode 函数 测试用例 期待答案

function getNum36() {
  var nums36 = []
  for (let i = 0; i < 36; i++) {
    if (i >=0 && i <= 9) {
      nums36.push(i)
    } else {
      // 增加a-z
      nums36.push(String.fromCharCode(i + 87))
    }
  }
  return nums36
}

function scale36(n) {
  // 36进制 0-9 a-z
  const nums36 = getNum36()
  const arr = []
  while(n) {
    const res = n % 36
    arr.unshift(nums36[res])
    n = parseInt(n/36)
  }
}

console.log(scale36(36)); // 10