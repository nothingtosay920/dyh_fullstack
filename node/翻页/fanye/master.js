
const cluster = require('cluster')
// 多个进程共享一个端口
const cpuNums = require('os').cpus().length

cluster.setupMaster({
  exec: 'worker.js',
  ages: ['--use', 'http']
})

console.log(`一共开启${cpuNums}个子进程来进行爬取`);
console.log(`爬取数据是乱序的`);

let pageNum = 10
// 
const startTime = Date.now()
for (let i = 0; i < cpuNums; i++) {
  let work = cluster.fork()
  // 通信 IO\
  
  // nginx
  work.send([i, cpuNums, pageNum])
  work.on('message', (msg) => {
    pageNum--
    if (pageNum === 0) {
      console.log(`\n已完成所有爬取, using${Data.now() - startTime}ms\n`);
      console.log('关闭子进程');
      cluster.disconnect()
    }
  })
}
cluster.on('fork', (worker) => {
  console.log(`[master]: fork worker ${worker.id}\n`);
})
cluster.on('exit', (worker) => {
  console.log(`[master]: 子进程${worker.id} 关闭`);
})