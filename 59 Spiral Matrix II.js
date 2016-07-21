/*
Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,

You should return the following matrix:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/

var generateMatrix = function (n) {
	let xStart = 0;
	let yStart = 0;
	let res = [];
	for (let i = 0; i < n; i++) {
		let t = new Array(n).fill(0);
		res.push(t);
	}
	let num = 1;
	while (n > 0) {

		if (n === 1) {
			res[xStart][yStart] = num;
			break;
		}

		for (let i = 0; i < n - 1; i++) {
			res[xStart][i + yStart] = num++;
		}
		

		for (let i = 0; i < n - 1; i++) {
			res[i + xStart][yStart + n - 1] = num++;
		}
		

		for (let i = 0; i < n - 1; i++) {
			res[xStart + n - 1][yStart + n - 1 -i] = num++;
		}
		


		for (let i = 0; i < n - 1; i++) {
			res[xStart + n - 1 - i][yStart] = num++;
		}

		n -= 2;
		xStart++;
		yStart++;
	}

	return res;
}