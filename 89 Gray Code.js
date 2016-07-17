/*
The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.
*/

var grayCode = function (n) {
	if (n === 0) {
		return [0];
	}
	let res = [0, 1];

	for (let i = 2; i <= n; i++) {
		let temp = [];
		for (let j = res.length - 1; j >= 0; j--) {
			temp.push(res[j] + Math.pow(2, (i - 1)));
		}
		res = res.concat(temp);
	}


	return res;

}

