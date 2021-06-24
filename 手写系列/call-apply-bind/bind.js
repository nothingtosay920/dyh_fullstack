  Function.prototype.mybind = function(thisArg) {
    if (typeof this !== 'function') {
      throw new TypeError('Error')
    }
    // console.log(thisArg);
    var args = Array.prototype.slice.call(arguments, 1) // [4, 5] 
    var self = this
    var nop = function() {}
    // var fn = Array.prototype.shift.call(arguments);
    // 绑定函数
    var bound = function() {
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

  Function.prototype.mybind = function(thisArg) {
    var args = [...arguments].slice(1)
    var self = this
    var nop = function() {}
    var bound = function() {
      return self.apply(
        this instanceof nop ? this : thisArg,
        args
      )
    }
    if (this.prototype) {
      nop.prototype = this.prototype
    }
    bound.prototype = new nop()
    return bound
  }



  function mYbind(thisArg) {
    var that = this
    var args = [...arguments].slice(1)
    return function () {
      that.call(thisArg, args)
    }
  }

  a.mybind(b, 1,2,3)