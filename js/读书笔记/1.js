// 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间
// 然后写一个 myClear，停止上面的 mySetInterVal

function mySetInterVal(fn, a, b) {
  this.a = a
  this.b = b
  this.time = 0
  this.start = () => {
    this.handle = setTimeout(() => {
      fn()
      this.time++
      this.start()
    }, this.a + this.time * this.b)
  }
  this.clear = () => {
    clearTimeout(this.handle)
    this.time = 0
  }
}

var a = new mySetInterVal(() => {console.log('123')},1000, 2000 );
a.handle()