//取出非零数，添加到一个数组中，将非零数组依次赋值给原数组，剩余位置变成0
var moveZeroes = function(nums) {
    let newArray = []
    let k = 0
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i]){
            newArray[k++] = nums[i]
        }
    }
    for(let i = 0 ; i < newArray.length ; i++){
        nums[i] = newArray[i]
    }
    for(let i = newArray.length ; i < nums.length ; i++){
        nums[i] = 0
    }
    return nums;
};
