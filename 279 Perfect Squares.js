/*
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.
*/

/*
利用数论中的4平方和原理:所有自然数至多只要用四个数的平方和就可以表示。也就是说结果只有4中情况:1, 2, 3, 4
如果含有因子4，那么尽可能多的除，因为一个完全平方数乘以4之后还是完全平方数
*/

var numSquares = function (n) {
    while (n % 4 === 0) {
        n = Math.floor(n / 4);
    }
    if (n % 8 === 7) {
        return 4;
    }

    for (let a = 0; a * a <= n; a++) {
        let b = Math.floor(Math.sqrt(n - a * a));
        if (a * a + b * b === n) {
            return !!a + !!b;
        }
    }
    return 3;
}
