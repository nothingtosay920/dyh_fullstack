let arr = [1, 2,, 3]

// 1. arr的长度 4
// 2. 去除arr中的空数组项

arr.filter(() => true)

// 3. arr2 = arr.map(parseInt)     arr2 = ? 
// map filter 不会遍历empty

// 4. arr 和 arr2 合并成 arr3的结果
// arr3 = arr.concat(arr2)
// arr3 = [...arr, ...arr2]

// 5. 去除arr3中重复的内容
Array.from(new Set(arr3))