let b = {
    name: '宜豪',
  }
  function a(e, r) {
    this.sex = 'boy'
    console.log(e + r);
    console.log(this.name);
  }
  
  Function.prototype.mybind = function(thisArg) {
    if (typeof this !== 'function') {
      throw new TypeError('Error')
    }
    // console.log(thisArg);
    const args = [...arguments].slice(1) // [4, 5] 
    const self = this
    const nop = function() {}
    // const fn = Array.prototype.shift.call(arguments);
    // 绑定函数
    const bound = function() {
      // console.log(arguments);
    //   console.log('this is ' + this);
      return self.apply(  // this.sex = 'boy'
        this instanceof nop ? this : thisArg,
        args
      )
    }
    
    if (this.prototype) {
      nop.prototype = this.prototype
    }
    bound.prototype = new nop()
    // console.log(bound.prototype, '-----');
    
    return bound
  }
  
  
  let res = a.mybind(b, 4, 5)
  let newA = new res()
  console.log(newA);