

let arr = [1, 2, 3, 4, 5]
// console.log(Object.keys(arr));
// console.log(Object.values(arr));
let newArr = [...arr.keys()]

let iter = arr.entries()
console.log(iter);
for (const e of iter) {
    console.log(e);
}
// [0, 1  ]
// [ 1, 2 ]
// [ 2, 3 ]
// [ 3, 4 ]
// [ 4, 5 ] 

function test() {
    
}

arr.includes('xxx')

let people = [
    { name: '小陶', age: 20},
    { name: '小叶', age: 18},
    { name: '大陶', age: 20}
]

function findFriend(person) {
    return person.name === '叶总'
}
console.log(people.find(findFriend));
// find 会遍历数组 把每一项交给参数(函数) 

let test = [1, 2, 3, 4]
function index(params) {
    return params == 1
}
console.log(test.findIndex(index));
