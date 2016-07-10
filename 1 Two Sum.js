/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
*/

var twoSum = function (nums, target) {
	let mapping = {};
	for (let i = 0; i < nums.length; i++) {
		if (mapping[nums[i]] !== undefined) {
			let res = [mapping[nums[i]], i];
			return res;
		}
		mapping[(target - nums[i])] = i;
	}
	return [];
}