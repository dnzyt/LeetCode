/*
Write a function to find the longest common prefix string amongst an array of strings.
*/

var longestCommonPrefix = function (strs) {
	if (!strs || strs.length === 0) {
		return '';
	}

	if (strs.length === 1) {
		return strs[0];
	}

	let shortest = strs[0];
	for (let temp of strs) {
		if (temp.length < shortest.length) {
			shortest = temp;
		}
	}

	let res = '';
	for (let i = 0; i < shortest.length; i++) {
		let v = shortest.charAt(i);
		for (let str of strs) {
			if (str.charAt(i) !== v) {
				return res;
			}
		}
		res = res + v;
	}

	return res;
}