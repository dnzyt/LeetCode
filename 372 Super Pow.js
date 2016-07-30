/*
Your task is to calculate ab mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array.

Example1:

a = 2
b = [3]

Result: 8
Example2:

a = 2
b = [1,0]

Result: 1024
*/

var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return x % 1337;
    }

    return myPow(x % 1337, Math.floor(n / 2)) * myPow(x % 1337, Math.floor(n - Math.floor(n / 2))) % 1337;
}

var superPow = function(a, b) {
    let ans = 1;
    for (let i = 0; i < b.length; i++) {
        ans = myPow(ans, 10) * myPow(a, b[i]) % 1337
    }
    return ans;
};
