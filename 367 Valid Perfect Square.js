/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.
*/

/*
完全平方数有一个特点：
1 = 1
4 = 1 + 3
9 = 1 + 3 + 5
16 = 1 + 3 + 5 + 7
.
.
.

*/

var isPerfectSquare = function (num) {
	let i = 1;
	while (num > 0) {
		num -= i;
		i += 2;
	}

	return num === 0;
}