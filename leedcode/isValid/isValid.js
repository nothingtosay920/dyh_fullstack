var isValid = function(s) {
    let arr = []
    for (let i = 0; i < s.length; i++) {
        if ((s[i] == '(') || (s[i] == '{') || (s[i] == '[')) {
            arr.push(s[i])
        }
        else{
            if ((s[i] == ')' && arr.pop() == '(') || (s[i] == '}' && arr.pop() == '{') || (s[i] == ']' && arr.pop() == '['))  {}  
            else {
                return false
            }
        }   
    }
    if (arr.length == 0) {
        return true
    }
}

console.log(isValid("({())}"))
// ({())}  false
// {({})}  true
// pop()会直接删除最后一个元素 判断的时候也在改变arr的元素