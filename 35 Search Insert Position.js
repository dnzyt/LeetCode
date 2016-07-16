/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
*/

var searchInsert = function (nums, target) {
	if (!nums || nums.length === 0) {
		return 0;
	}
	let start = 0;
	let end = nums.length;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] < target) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}

	if (nums[start] > target) {
		return start;
	} else {
		return end + 1;
	}
}