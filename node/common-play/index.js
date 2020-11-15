// var playerAction = process.argv[ process.argv -1 ]
// console.log(process.argv);
const game = require("./lib");
// const result = game(playerAction)
// console.log(result);

// 获取进程标准输入
let count = 0
process.stdin.on('data', e => {
    const playerAction = e.toString().trim()
    const result = game(playerAction)
    console.log(result);
    if (result == -1) {
        count++
    }
    if (count === 3) {
        console.log('不玩了');
        process.exit( )
    }
})
