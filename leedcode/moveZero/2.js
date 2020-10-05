var moveZeroes = function(nums) {
    //计数
    let k = 0;
    //保持原来的排序 并且占据0的位置
    for (let i = 0 ;i<nums.length;i++){
        if(nums[i]){
            nums[k++] = nums[i];
        }
    }
    //让剩余位置变成0
    for(let i = k ; i<nums.length ; i++){
         nums[i] = 0;
    }
    return nums;
};

