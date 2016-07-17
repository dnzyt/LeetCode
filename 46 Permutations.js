/*
Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

var helper = function (nums, arr, res) {
	if (!nums || nums.length === 0) {
		return res;
	}
	if (arr.length === nums.length) {
		res.push(arr.slice());
		return;
	}

	for (let i = 0; i < nums.length; i++) {
		if (arr.includes(nums[i])) {
			continue;
		}
		arr.push(nums[i]);
		helper(nums, arr, res);
		arr.pop();
	}
}

var permute = function (nums) {
	let res = [];
	let arr = [];
	helper(nums, arr, res);
	return res;
}
