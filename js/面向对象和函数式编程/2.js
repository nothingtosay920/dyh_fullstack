// 1、请在不影响原调用的情况下简化下列方法
function func1(c) {
 const a = 1
 const b = 2
 const d = a * b * c
 return a + b + c + d
}

function func2(c) {
 const a = 1
 const b = 2
 const d = a + b + c
 return a + b + c + d
}

function func3(c) {
 const a = 1
 const b = 2
 const d = a - b + c
 return a + b + c + d
}

function func4(c) {
 const a = 1
 const b = 2
 const d = a + b - c
 return a + b + c + d
}

function simplify(fn) {
  const a = 1
  const b = 2
  return function(c) {
    const d = fn(a, b, c);
    return a + b + c + d;
  }
}
const f1 = simplify((a, b, c) => a * b * c);
const f2 = simplify((a, b, c) => a + b + c);
const f3 = simplify((a, b, c) => a - b + c);
const f4 = simplify((a, b, c) => a + b - c);
console.log(f1(4) === func1(4));