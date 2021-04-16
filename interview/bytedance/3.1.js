const cluster = require('cluster') // 多核 多进程

if (cluster.isMaster) {
  // 不干活
  // 调度
  console.log(require('os').cpus().length)
  for (let i = 0; i < require('os').cpus().length /2; i++) {
    createWorker()    
  }

  function createWorker() {
    const worker = cluster.fork()
  }
} else {
  require('./3')
}

