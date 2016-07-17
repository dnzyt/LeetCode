/*
Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

*/

var helper = function (candidates, k, n, res, arr, start) {
	if (k === 0 && n === 0) {
		res.push(arr.slice());
		return;
	}

	if (k === 0 || n === 0) {
		return;
	}

	for (let i = start; i < candidates.length; i++) {
		if (candidates[i] <= n) {
			arr.push(candidates[i]);
			helper(candidates, k - 1, n - candidates[i], res, arr, i + 1);
			arr.pop();
		}
	}
}


var combinationSum3 = function (k, n) {
	let res = [];
	let arr = [];
	let candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	helper(candidates, k, n, res, arr, 0);

	return res;
}