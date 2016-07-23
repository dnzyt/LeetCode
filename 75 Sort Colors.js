/*
Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
*/

var sorColors = function (nums) {
	let end = nums.length - 1;
	let start = 0;
	for (let i = 0; i < nums.length; i++) {
		if (i > end) {
			break;
		}
		if (nums[i] === 0) {
			nums[i] = nums[start];
			nums[start] = 0;
			start++;
		} else if (nums[i] === 2) {
			nums[i] = nums[end];
			nums[end] = 2;
			end--;
			i--;
		} else {
			continue;
		}
	}
}