// 
function bar() {
  console.log(myname);
}

function foo() {
  var myname = 'wn'
  bar()
}

var myname = 'aa'

foo()

// 词法作用域: 是根据代码位置决定 与调用位置无关


// 块级作用域的变量查找

function bar() {
  var myname = 'abb'
  let test1 = 100
  if (1) {
    let myname = 'tao'
    console.log(test1);
  }
}

function foo() {
  var myname = 'foo'
  let test = 2
  {
    let test = 2
    bar()
  }
}

var myname = 'ccc'
let myage =10
