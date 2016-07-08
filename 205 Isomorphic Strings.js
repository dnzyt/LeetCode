/*
Given two strings s and t, determine if they are isomorphic.

Given "egg", "add", return true.

Given "foo", "bar", return false.

Given "paper", "title", return true.
*/


var isIsomorphic = function (s, t) {
	let mapping = {};
	let reverseMapping = {};
	for (let i = 0; i < s.length; i++) {
		if (mapping[s[i]] === undefined) {
			mapping[s[i]] = t[i];
			if (reverseMapping[t[i]] === undefined) {
				reverseMapping[t[i]] = s[i];
			} else if (reverseMapping[t[i]] !== s[i]) {
				return false;
			}
		} else {
			if (mapping[s[i]] === t[i]) {
				continue;
			} else {
				return false;
			}
		}
	}
	return true;
}