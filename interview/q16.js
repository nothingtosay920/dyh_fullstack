function sidEffecting(ary) {
  ary[0] = ary[2]
}

function bar(a, b, c) {
  c = 10
  sidEffecting(arguments) // 参数变量 和 arguments是双向绑定
  return a + b + c
}

console.log(bar(1, 1, 1));