// https://leetcode-cn.com/problems/the-masseuse-lcci/
var massage = function(nums) {
    let sum = 0

    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] >= nums[i - 1]) {
            sum += nums[i]

        }
        if (nums[i - 1] > nums[i]) {
            sum += nums[i - 1]
        }
        i++;
    }
    return sum
};
console.log(massage([1, 2, 3]));
// 面试题17.16