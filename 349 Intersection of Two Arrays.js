/*
Given two arrays, write a function to compute their intersection.
*/

var intersection = function (num1, num2) {
	// Use set to eleminate duplicated elements
	var s1 = new Set(num1);
	var s2 = new Set(num2);

	var ans = [];
	for (var temp of s1) {
		if (s2.has(temp)) {
			ans.push(temp);
		}
	}

	return ans;
}