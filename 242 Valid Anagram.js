/*
Given two strings s and t, write a function to determine if t is an anagram of s.
For example,
s = "anagram", t = "nagaram", return true
s = "rat", t = "car", return false
*/

var isAnagram = function (s, t) {
	let ans = new Array(26).fill(0);

	for (let i = 0; i < s.length; i++) {
		ans[s.charCodeAt(i) - 97]++;
	}

	for (let j = 0; j < t.length; j++) {
		ans[t.charCodeAt(j) - 97]--;
	}

	for (let x of ans) {
		if (x !== 0) {
			return false;
		}
	}

	return true;
}