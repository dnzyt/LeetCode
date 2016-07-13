/*
Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.
*/

var integerBreak = function (n) {
	if (n === 2 || n === 3) {
		return n - 1;
	}

	var res = 1;
	while (n > 4) {
		res *= 3;
		n -= 3;
	}
	return res * n;
}

/*
数字2只能拆成1+1，所以乘积也为1。

数字3可以拆分成2+1或1+1+1，显然第一种拆分方法乘积大为2。

数字4拆成2+2，乘积最大，为4。

数字5拆成3+2，乘积最大，为6。

数字6拆成3+3，乘积最大，为9。

数字7拆为3+4，乘积最大，为12。

数字8拆为3+3+2，乘积最大，为18。

数字9拆为3+3+3，乘积最大，为27。

数字10拆为3+3+4，乘积最大，为36。

从7开始，最大值为往前数3个位置（4）的最大值的3倍
例如： 7 是 4的三倍， 8 是 5的三倍，9 是 6的三倍
*/

var secondSolution = function (n) {
	var l = [0, 0, 1, 2, 4, 6, 9];
	for (var i = 7; i <= n; i++) {
		l[i] = l[i - 3] * 3;
	}

	return l[n];
}