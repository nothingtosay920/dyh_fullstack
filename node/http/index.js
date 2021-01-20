const { fstat } = require('fs')
const http = require('http')
const fs = require('fs')

http.createServer(function(req, res) {
  if (req.url === '/favicon.ico') {
    res.writeHead(200)
    return
  }
  res.writeHead(200)
  fs.createReadStream(__dirname + '/index.html').pipe(res)
}).listen(3000)