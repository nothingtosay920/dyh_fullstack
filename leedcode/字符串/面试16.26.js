  // https://leetcode-cn.com/problems/calculator-lcci/
  var calculate = function(s) {
    // 储存数字
    let stack = [];
    // 储存上一次的运算符
    let sign = '';
    // 储存上一次的num值
    let num = 0;
    // 守卫条件
    s += '+0'
    for (let i = 0; i < s.length; i += 1) {
        let c = s[i];
        if (c == ' ') continue
        if (!isNaN(parseInt(c))) {
            // 数字的话直接加下去
            num = num * 10 + parseInt(c);
        } else {
            // 非数字
            // 拿上一次的运算符,如果没有 默认+
            if (!sign) sign = '+';
            switch(sign) {
                // 上一次是+-操作 推入num到数组中
                case "+":
                    stack.push(num);
                    break;
                case "-":
                    stack.push(-num);
                    break;
                // 乘除会提高运算等级 所以需要从stack中取上一次的运算值与当前计算
                case "*":
                    stack.push(parseInt(stack.pop() * num));
                    break;
                case "/":
                    stack.push(parseInt(stack.pop() / num));
                    break;
            }
            num = 0;
            sign = s[i]
        }
    }
    let rlt = 0;
    while (stack.length) {
        rlt += stack.pop();
    }
    return rlt;
};
