const fs = require('fs')

fs.readFile('2.js', 'uft8', (err, content) => {
  console.log(content);
})

let arr = [1, 2, 3]
arr.forEach((item) => {
  console.log(item);
})

function readFile(cb) {
  setTimeout(cb('hello world'), 2000)
}
readFile((c) => {
  console.log(c);
})