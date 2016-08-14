/*
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

You may assume that the given expression is always valid.

Some examples:
"3+2*2" = 7
" 3/2 " = 1
" 3+5 / 2 " = 5
 */

var calculator = function(s) {
    let stack = [];
    let temp = '';
    let operator = '+';
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= '0') {
            temp += s[i];
        }

        if ((s[i] < '0' && s[i] !== ' ') || i === s.length - 1) {
            if (operator === '+') {
                stack.push(parseInt(temp));
            }
            if (operator === '-') {
                stack.push(-1 * parseInt(temp));
            }

            if (operator === '*') {
                let left = stack.pop();
                let right = parseInt(temp);
                stack.push(left * right);
            } 

            if (operator === '/') {
                let left = stack.pop();
                let right = parseInt(temp);
                if (left < 0) {
                    stack.push(-1 * Math.floor(-1 * left / right));
                } else {
                    stack.push(Math.floor(left / right));
                }
            }
            temp = '';
            operator = s[i];
        }
    }

    return stack.reduce(function(a, b) {
        return a + b;
    })

}