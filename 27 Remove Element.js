/*
Given an array and a value, remove all instances of that value in place and return the new length.
Do not allocate extra space for another array, you must do this in place with constant memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.
*/

var removeElement = function (nums, val) {
	if (!nums || nums.length === 0) {
		return 0;
	}

	let pointer = nums.length - 1;
	let current = 0;
	while (current <= pointer) {
		if (nums[current] === val) {
			nums[current] = nums[pointer];
			pointer--;
		} else {
			current++;
		}
	}

	// current is one step further than the last element which doesn't equal to val
	
	return current;
}