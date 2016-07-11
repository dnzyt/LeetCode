/*
Given a non negative integer number num. For every numbers i in the range 0 <= i <= num calculate the number of 1's in their binary representation and return them as an array.
*/

//每次遇到2的指数，就把之前所有位加一然后依次复制到数组后面
var countBits = function (num) {
	if (num === 0) {
		return [0];
	}

	if (num === 1) {
		return [0, 1];
	}

	let res = [0, 1];
	let index = 2;
	// for (let index = 2; index <= num; index = index * 2) 
	while (true) {
		let i = 0;
		while (i < index) {
			res.push(res[i] + 1);
			if (i + index === num) {
				return res;
			}
			i++;
		}
		index = index * 2;
	}
	return res;//Can not reach here
}
