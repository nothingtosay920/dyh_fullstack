var moveZeroes = function(nums) {
    //k标记0的位置
    let k = 0
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i]){
            if(k != i){
                //交换位置
                nums[k] = nums[i]
                nums[i] = 0
                k = i
            }
            else{
                k++
            }
        }
    }return nums
};
