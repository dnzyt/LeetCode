/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
*/
var moveZeros = function (nums) {
	if (!nums || !Array.isArray(nums) || nums.length === 0) {
		return;
	}
	var indexFirst = 0;
	var indexEnd = 0;
	while (indexEnd < nums.length) {
		if (nums[indexEnd] !== 0) {
			var temp = nums[indexFirst];
			nums[indexFirst] = nums[indexEnd];
			nums[indexEnd] = temp;

			indexFirst++;
		}

		indexEnd++;
	}
}