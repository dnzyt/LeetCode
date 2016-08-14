/*
Additive number is a string whose digits can form additive sequence.

A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

For example:
"112358" is an additive number because the digits can form an additive sequence: 1, 1, 2, 3, 5, 8.

1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
"199100199" is also an additive number, the additive sequence is: 1, 99, 100, 199.
1 + 99 = 100, 99 + 100 = 199
Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.
 */

var isAdditiveNumber = function(num) {
    let now = '';
    for (let i = 1; i <= num.length; i++) {
        for (let j = i + 1; j <= num.length; j++) {
            let temp1 = num.substring(0, i);
            let temp2 = num.substring(i, j);
            if ((temp1.length > 1 && temp1[0] === '0') || (temp2.length > 1 && temp2[0] === '0')) {
                continue;
            }
            let first = parseInt(temp1);
            let second = parseInt(temp2);
            let next = first + second;
            let nexts = next.toString();
            now = temp1 + temp2 + nexts;
            while (now.length < num.length) {
                first = second;
                second = next;
                next = first + second;
                nexts = next.toString(); 
                now += nexts;
            }
            if (now === num) {
                return true;
            }

        }
    }
    return false;
}