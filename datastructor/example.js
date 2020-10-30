"use strict";
exports.__esModule = true;
// "use strict";
var Stack_1 = require("./stack/lib/Stack");
var stack = new Stack_1["default"]();
stack.push("第一条数据");
stack.push("第二条数据");
stack.pop();
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.toString());
console.log(stack.clear());
var decimalToBinary = function (decNumber) {
    var stack = new Stack_1["default"](); // 入栈每个位
    var number = decNumber;
    var rem; //余数
    var binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
};
var testNumber = 4;
console.time("数组栈");
console.log(decimalToBinary(testNumber));
console.timeEnd("数组栈");
