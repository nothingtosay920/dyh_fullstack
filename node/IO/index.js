const glob = require("glob");

// 阻塞式I/O调用
var result = null
console.time('glob')
result = glob.sync(__dirname + '/**/*')
console.time('glob')


// 非阻塞式I/O调用
var result = null
console.time('glob')
glob(__dirname + '/**/*', function(err, res) {
    result = res
    console.log(result);
})
console.time('glob')