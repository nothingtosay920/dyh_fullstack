let data = [
    { value: '麻烦给我的爱人来一杯mojito', time: 5, color: 'red', speed: 1, fontSize: 22 },
    { value: '周杰伦真帅', time: 10, color: '#00a1f5', speed: 1, fontSize: 30 },
    { value: '我喜欢看她微醺时的眼眸', time: 14, color: '#00a1f5' },
    { value: '我的咖啡，糖不用太多', time: 20},
  ]
  
  let canvas = document.getElementById('canvas')
  let video = document.getElementById('video')
  let $txt = document.getElementById('text')
  let $btn = document.getElementById('btn')
  let $color = document.getElementById('color')
  let $range = document.getElementById('range')
  
  
  // 创建渲染弹幕的类
  class CanvasBarrage {
    constructor(canvas, video, opts = {}) {
      if (!canvas || !video) return 
      // 将传进来的参数挂载this上
      this.video = video
      this.canvas = canvas
      // 设置canvas的宽高和video宽高一致
      this.canvas.width = video.width
      this.canvas.height = video.height
  
      // 获取画布，操作画布
      this.ctx = canvas.getContext('2d')
  
      // 设置默认参数，如果用户没传我就给给它带上
      let defOpts = {
        color: '#e91e63',
        speed: 1.5,
        opacity: 0.5,
        fontSize: 20,
        data: []
      }
      // 合并对象 再挂载到this上
      Object.assign(this, defOpts, opts)
      // 添加属性， 用来判断播放暂停， 默认true是暂停
      this.isPaused = true
      // 得到所有的弹幕消息
      this.barrages = this.data.map(item => new Barrage(item, this))
      // 渲染弹幕
      this.render()
    }
    // 渲染canvas绘制的弹幕
    render() {
      // 绘制的第一步，清除原来的画布
      this.clear()
      // 渲染
      this.renderBarrage()
      if (this.isPaused === false) {
        requestAnimationFrame(this.render.bind(this))
      }
    }
  
    clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
  
    renderBarrage() {
      // 首先拿到当前视频播放的时间
      let time = this.video.currentTime
      this.barrages.forEach(barrage => {
        if (time >= barrage.time && !barrage.flag) {
          // 如果弹幕没有初始化完成，就先初始化
          if (!barrage.isInit) {
            barrage.init()
            barrage.isInit = true
          }
  
          // 弹幕从右往左渲染
          barrage.x -= barrage.speed
          barrage.renderOnce() // 渲染每一条弹幕
  
          if (barrage.x < -barrage.width) {
            barrage.flag = true
          }
        }
      });
    }
  
    add(obj) {
      this.barrages.push(new Barrage(obj, this))
    }
  }
  
  // 初始化弹幕的类
  // 让每一条弹幕里面属性都能生效
  class Barrage {
    constructor(obj, ctx) {
      this.value = obj.value // 弹幕的内容
      this.time = obj.time // 弹幕出现的时间
      this.obj = obj
      this.context = ctx
    }
    // 初始化弹幕
    init() {
      this.color = this.obj.color || this.context.color
      this.speed = this.obj.speed || this.context.speed
      this.opacity = this.obj.opacity || this.context.opacity
      this.fontSize = this.obj.fontSize || this.context.fontSize
  
      // 计算每条弹幕的宽度
      let p = document.createElement('p')
      p.style.fontSize = this.fontSize + 'px'
      p.innerHTML = this.value
      document.body.appendChild(p)
      this.width = p.clientWidth
      document.body.removeChild(p)
  
      // 设置弹幕出现的位置
      this.x = this.context.canvas.width
      this.y = this.context.canvas.height * Math.random()
  
      // 超出范围处理
      if (this.y < this.fontSize) {
        this.y = this.fontSize
      } else if (this.y > this.context.canvas.height - this.fontSize) {
        this.y = this.context.canvas.height - this.fontSize
      }
    }
  
    // 渲染每一条弹幕
    renderOnce() {
      this.context.ctx.font = `${this.fontSize}px Arial`
      this.context.ctx.fillStyle = this.color;
      // 绘制文字
      this.context.ctx.fillText(this.value, this.x, this.y)
    }
  
  }
  
  
  let canvasBarrage = new CanvasBarrage(canvas, video, {data})
  video.addEventListener('play', () => {
    canvasBarrage.isPaused = false
    canvasBarrage.render()
  })
  
  // 发弹幕
  $btn.addEventListener('click', send)
  function send() {
    let value = $txt.value
    let time = video.currentTime
    let color = $color.value
    let fontSize = $range.value
    let obj = { value, time, color, fontSize }
    canvasBarrage.add(obj)
    $txt.value = ''
  }