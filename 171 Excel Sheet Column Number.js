/*
Given a column title as appear in an Excel sheet, return its corresponding column number.
*/

var titleToNumber = function (s) {
	let mapping = {
		'A': 1,
		'B': 2,
		'C': 3,
		'D': 4,
		'E': 5,
		'F': 6,
		'G': 7,
		'H': 8,
		'I': 9,
		'J': 10,
		'K': 11,
		'L': 12,
		'M': 13,
		'N': 14,
		'O': 15,
		'P': 16,
		'Q': 17,
		'R': 18,
		'S': 19,
		'T': 20,
		'U': 21,
		'V': 22,
		'W': 23,
		'X': 24,
		'Y': 25,
		'Z': 26
	}

	let reveresed = s.split('').reverse().join('');
	let times = 0;
	let ans = 0;
	for (let x of reveresed) {
		ans += (mapping[x] * Math.pow(26, times));
		times++;
	}
	return ans;
}