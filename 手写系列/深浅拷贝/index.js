// let arr = [1, 'a', 'b', true, undefined]
let arr = [{'a': 'b'}, 2, true]
// let new_arr = arr.concat() // 浅拷贝
// new_arr[0] = 2

// let new_arr = arr.slice() 浅拷贝

// let new_arr = JSON.parse(JSON.stringify(arr)) // 深拷贝 但是不能拷贝函数

let arr = [function() {console.log('a'), {a: function() {console.log('b');}}}]