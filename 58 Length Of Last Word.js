/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
*/

/*
从后往前查
*/

var lengthOfLastWord = function (s) {
	if (!s || s.length === 0) {
		return 0;
	}

	let lastBegin = s.length - 1;
	while(lastBegin >= 0 && s[lastBegin] === ' ') {
		lastBegin--;
	}
	if (lastBegin < 0) {
		return 0;
	}

	let count = 0;
	while(lastBegin >= 0 && s[lastBegin] !== ' ') {
		count++;
		lastBegin--;
	}

	return count;
}