


var intersect = function(nums1, nums2) {
  const n1 = nums1.length
  const n2 = nums2.length
  let a1,a2
  const res = []
  if (n1 > n2) {
    a2 = nums1.sort((a, b) => a - b)
    a1 = nums2.sort((a, b) => a - b) // 短
  } else {
    a2 = nums2.sort((a, b) => a - b)
    a1 = nums1.sort((a, b) => a - b)
  }
  let lf = 0
  let rh = 0
  while (lf < a1.length) {
    if (a1[lf] == a2[rh]) {
      res.push(a1[lf])
      lf++
      rh++
    } else if (a1[lf] > a2[rh]) {
      rh++
    } else {
      lf++
    }
  }
  return res
};

// 
const intersect = (nums1, nums2) => {
  const map = {};
  const res = [];
  for (const num1 of nums1) { // 记录nums1各个数字的出现次数
    if (map[num1]) {
      map[num1]++;  
    } else {         
      map[num1] = 1; 
    }
  }
  for (const num2 of nums2) { // 遍历nums2，看看有没有数字在nums1出现过
    const val = map[num2];
    if (val > 0) {            // 有出现过
      res.push(num2);         // 推入res数组
      map[num2]--;            // 匹配掉一个，就减一个
    }
  }
  return res;
};