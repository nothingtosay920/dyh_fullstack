const twoSum = function(nums, target) {
    let array = [];
    for(i = 0 ;i < nums.length; i++) {
        if (array[target-nums[i]] != undefined )  {
            return [array[target-nums[i]],i];
        }else {
            array[nums[i]] = i;
        }
    }
    return [];
}

console.log(twoSum([2,7,9,5],9))
