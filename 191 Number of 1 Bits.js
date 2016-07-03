/*
Write a function that takes an unsigned integer and returns the number of '1' bits it has.
*/

var hammingWeight = function (n) {
	let ans = 0;
	while (n !== 0) {
		n = (n - 1) & n;
		ans++;
	}
	return ans;
}