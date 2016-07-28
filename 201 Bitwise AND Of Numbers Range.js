/*
Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

For example, given the range [5, 7], you should return 4.
*/

var rangeBitwiseAnd = function (m, n) {
    let mask = Number.MAX_SAFE_INTEGER;
    while ((m & mask) !== (n & mask)) {
        mask <<= 1;
    }
    return m & mask;
}
