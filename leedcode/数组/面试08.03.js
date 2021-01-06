// https://leetcode-cn.com/problems/magic-index-lcci/
// 魔术索引


const findMagicIndex = (nums) => {
  const find = (lo, hi) => {
    if (lo > hi) return -1;
    const mid = (lo + hi) >>> 1;
    const magicIndex = find(lo, mid - 1);
    if (magicIndex > -1) {
      return magicIndex;
    } else if (nums[mid] == mid) {
      return mid;
    } else {
      return find(mid + 1, hi);
    }
  };
  return find(0, nums.length - 1);
};

// 弟弟
var findMagicIndex = function(nums) {
  let res = -1
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (res ^ nums[i] ^ i) {
      return res
    }
  }
  return -1
};