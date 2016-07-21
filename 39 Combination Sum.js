/*
Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.
*/

var helper = function (candidates, res, target, arr, start) {
	if (target === 0) {
		res.push(arr.slice());
		return;
	}

	if (start >= candidates.length) {
		return;
	}

	for (let i = start; i < candidates.length; i++) {
		if (candidates[i] <= target) {
			arr.push(candidates[i]);
			helper(candidates, res, target - candidates[i], arr, i);
			arr.pop();
		} else {
			helper(candidates, res, target, arr, i + 1);
			break;
		}
	}
}

var combinations = function (candidates, target) {
	let res = [];
	let arr = [];
	helper(candidates, res, target, arr, 0);
	return res;
}