// 石头剪刀布
console.log(process.argv);
var playerAction = process.argv[ process.argv -1 ]
var random = Math.random() * 3
if (random < 1) {
    var computerAction = 'rock'
}else if(random > 2) {
    var computerAction = 'scissor'
}else {
    var computerAction = 'papper'
}

// 进行比较
if (computerAction === playerAcdtion) {
    console.log('平');
}else if((computerAction === 'rock' && playerAction === 'paper') || (computerAction === 'scissor' && playerAction === 'rock') || (computerAction === 'paper' && playerAction === 'scissor')) {
    console.log('你赢了');
}else {
    console.log('你输了');
}