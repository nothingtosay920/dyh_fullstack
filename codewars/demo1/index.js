// function generateHashTagCapitalString(str) {
//     // 1. 是否为空 length == 0 null "" !
//     // 2. 是否超过140字 .length
//     // 3. # # + 
//     // 4. 每个单词都大写
//     return str.length > 140 || str == "" ? false : '#'+str.split(" ").map(function (word) {
//         return  word.charAt(0).toUpperCase() + word.slice(1)
//     }).join(' ')
    
//     // map() es6中数组的新方法,遍历每个元素,并用一个函数处理,返回新数组
// }
function generateHashTagCapitalString(str) {
    return str.length > 140 || str === '' ? false : '#' + str.split('').map(capitalize).join(' ')
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
generateHashTagCapitalString("hello world")
