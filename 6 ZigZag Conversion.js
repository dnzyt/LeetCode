/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:

P   A   H   N
A P L S I I G
Y   I   R

*/

var convert = function (s, numRows) {
	if (numRows === 1) {
		return s;
	}
	let res = '';
	for (let i = 0; i < numRows; i++) {
		if (i === 0) {
			for (let j = 0; j < s.length; j = j + 2 * (numRows - 1)) {
				res = res + s[j];
			}
			continue;
		} else if(i > 0 && i < numRows - 1) {

			//用一个flag来统计是往上数还是往下数
			let flag = 0;
			let j = i;
			while (j < s.length) {
				res = res + s[j];
				if (flag === 0) {
					flag = 1;
					let diff = (numRows - 1 - i) * 2;
					j = j + diff;
				} else {
					flag = 0;
					let diff = i * 2;
					j = j + diff;
				}
			}
			continue;
		}


		if (i === numRows - 1) {
			for (let j = numRows - 1; j < s.length; j = j + 2 * (numRows - 1)) {
				res = res + s[j];
			}
			continue;
		}
	}

	return res;
}