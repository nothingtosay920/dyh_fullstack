// 给定一个只包含'(' , ')', '{', '}', '[', ']'

const leftToRight = {
  "(": ")",
  "[": "]",
  "{": "}"
}

const isValid = function(s) {
  if (!s) {
    return true
  }

  // 初始化stack
  const stack = []
  const len = s.length
  for (let i = 0; i < len; i++) {
    // 缓存单个字符
    const ch = s[i]    
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(leftToRight[ch])
    } else {
      // 如果不是左括号 必须是和栈顶的左括号相匹配的右括号
      if (!stack.length || stack.pop() !== ch) {
        return false
      }
    }
  }

  return !stack.length
}