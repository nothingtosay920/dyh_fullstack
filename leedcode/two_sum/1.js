
// function twosum() {
// //类型 Object
// }

//函数表达式
//twoSum 常量 匿名表达式
//undefined 变量的值未定义
//let twoSum;
//console.log(twoSum);
//函数是功能的集合，代码的集合
//单独的功能
//数据可视化   webGL
/**
 * 
 * @param {Array} nums 
 * @param {integer} target 
 * @return Array []
 */
const twoSum = function(nums, target) {
    // 怎么实现？
    // 暴力一下
    // 两重循环
    let i,
        j,
        len = nums.length;
    for (i = 0; i < len; i++ ){
        //机器代码
        for (j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] == target) {
                return [i,j]
            }
        }
    }
    return [];
}
console.log(twoSum([2,7,11,15],9));