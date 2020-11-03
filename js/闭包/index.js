// function a() {
//     function b() {
//         var bbb = 235
//         console.log(aaa);
//     }
//     var aaa = 123
//     return b
// }
// var glob = 100
// var demo = a()
// demo()


// 3.js
function add() {
    var count = 0 
    function b() {
        console.log(count++);
    }
    return b
}

// 4.js
