/*
Given a pattern and a string, find if str follows the same pattern.

Examples:

1.pattern = "abba", str = "dog cat cat dog" should return true.
2.pattern = "abba", str = "dog cat cat fish" should return false.
3.pattern = "aaaa", str = "dog cat cat dog" should return false.
4.pattern = "abba", str = "dog dog dog dog" should return false.
*/

var wordPattern = function(pattern, str) {
	let arr = str.split(' ');
	if (pattern.length !== arr.length) {
		return false;
	}

	let mapping = {};
	let reverseMapping = {};

	for (let i = 0; i < pattern.length; i++) {
		if (mapping[pattern[i]] === undefined) {
			if (reverseMapping[arr[i]] === undefined) {
				mapping[pattern[i]] = arr[i];
				reverseMapping[arr[i]] = pattern[i];
				continue;
			} else {
				return false;
			}
		} else {
			if (mapping[pattern[i]] === arr[i]) {
				continue;
			} else {
				return false;
			}
		}
	}
	return true;
}


