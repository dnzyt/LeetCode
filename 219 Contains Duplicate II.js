/*
Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.
*/

var containsNearbyDuplicate = function(nums, k) {
	if (!nums || nums.length < 2 || k === 0) {
		return false;
	}

	let i = 0;
	let j = 1;
	while (i < nums.length - 1) {
		while (j - i <= k && j < nums.length) {
			if (nums[i] !== nums[j]) {
				j++;
			} else {
				return true;
			}
		}
		i++;
		j = i + 1;
	}

	return false;

}