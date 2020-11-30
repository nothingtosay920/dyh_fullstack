const addLog = {
  updated () {
    console.log(123)
  }
}

const app = {
  created () {
    console.log('我是扩展的created')
  },
  methods: {
    add () {
      console.log('数据发生变化混入')
    }
  }
}

module.exports = { addLog, app }
