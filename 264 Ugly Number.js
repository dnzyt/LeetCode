/*
Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

Note that 1 is typically treated as an ugly number.
*/

/*
在ugly number序列中，每一个ugly number都是前一个ugly number乘以2, 3, 5之后积的最小值
*/

var nthUglyNumber = function(n) {
    let res = [1];
    let i2 = 0;
    let i3 = 0;
    let i5 = 0;
    
    let current = 2;
    for (let i = 1; i < n; i++) {
        while (res[i2] * 2 < current) {
            i2++;
        }
        while (res[i3] * 3 < current) {
            i3++;
        }
        while (res[i5] * 5 < current) {
            i5++;
        }
        current = Math.min(res[i3] * 3, res[i5] * 5, res[i2] * 2);
        res.push(current);
        current++;
    }
    return res[res.length - 1];
};