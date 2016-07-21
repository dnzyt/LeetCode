/*
Given an array containing n distinct numbers taken from 0, 1, 2, 3, 4, 5 ... n, find the one that is missing from the array.
*/

var missingNumber = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		nums[i] = i - nums[i];
	}

	res = nums.length;
	for (let i = 0; i < nums.length; i++) {
		res += nums[i];
	}

	return res;
}