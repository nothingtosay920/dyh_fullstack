let arr = ['a', 'b', 'c', 'd', 'e']
for (let i = 0; i < array.length; i++) {
    console.log(arr[i]);
}

// 遍历数组
// for (let i of arr) {
//     console.log(i);    
// }
// 只能遍历有iterable 的对象

// 遍历对象 不建议遍历数组
for (let ley in arr) {

}


function Foo() {
    this[100] = 'test-100'
    this[1] = 'test-1'
    this['b'] = 'bar-B'
    this[50] = 'test-50'
    this[9] = 'test-9'
    this[8] = 'test-8'
    this[3] = 'test-3'
    this[5] = 'test-5'
    this['A'] = 'bar-A'
    this['C'] = 'bar-C'
}