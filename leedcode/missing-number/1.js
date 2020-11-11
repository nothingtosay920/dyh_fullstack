var missingNumber = function(nums) {
    let n = nums.length
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < n + 1; i++) {
        sum1 += i        
        sum2 += ( nums[i] || 0 ) 
    }
    return sum1 - sum2
};



// 0 ~ n 第一个和
// 对不完整的数组 求第二个和