/*
Given a string containing just the characters'(', ')', '{', '}', '[', ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

var isValid = function (s) {
	let mapping = {
		'(': ')',
		'[': ']',
		'{': '}'
	}
	if (s.length === 0) {
		return true;
	}
	if (s.length % 2 !== 0) {
		return false;
	}

	let stack = [s[0]];
	for (let i = 1; i < s.length; i++) {
		if (mapping[s[i]] === undefined) {
			if (mapping[stack.pop()] !== s[i]) {
				return false;
			}
			continue;
		} else {
			stack.push(s[i]);
		}
	}

	return stack.length === 0;
}