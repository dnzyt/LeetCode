/*
Given an integer n, return the number of trailing zeros in n! .

结尾的0由质因子2 * 5构成，而且n!中2出现的次数一定比5多, 所以问题转化成n!的阶乘中有多少个5.

但是要注意25贡献两个5,125贡献3个5，所以要看n之前是否有25, 125...这类数
*/

var trailingZeros = function(n) {
	let counter = 0;

	while (Math.floor(n / 5) >= 1) {
		counter += Math.floor(n / 5);
		n = Math.floor(n / 5);
	}

	return counter;
}