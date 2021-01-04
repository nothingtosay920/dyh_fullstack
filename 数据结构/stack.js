// const arr = [1, 2]
// arr.unshift(0)
// arr.splice(1, 0, 3)


// stack
// 用push pop
const stack = []
stack.push('a')
stack.push('b')
stack.push('c')
stack.push('d')

stack.pop()
stack.pop()
stack.pop()
stack.pop()

while (stack.length) {
  const top = stack[stack.length - 1]
  console.log(top);
  stack.pop()
}

