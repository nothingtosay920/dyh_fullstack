const http = require('http')
const fs = require('fs')
// 搭建一个web服务
var server = http.createServer(function (req, res) {
    if (res.url !== '/favicon.ico') {
        res.writeHead(200, {"content-type": "text/html"})
        const myyreadstream = fs.createReadStream(__dirname + '/views/http_demo.html', 'utf-8')
        myyreadstream.pipe(res)
    }
})

// 声明一个io的使用 
var io = require('socket.io')(server)
io.on('connection', function(socket) {
    console.log('一个socket连接成功');
    socket.on('link_to_server', (msg) => {
        console.log(`我收到一个问题${msg}`);
        // 响应客户端
        io.emit('link_to_server', msg)
    })
})

server.listen(8888, () => {
    console.log('server is running...');
})