/*
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.
*/

/*
current + 1 will be the next place for the swapping with i
*/

var removeDuplicates = function (nums) {
	if (!nums || nums.length === 0 || nums.length === 1) {
		return nums;
	} 

	let current = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[current] === nums[i]) {
			continue;
		} else {
			current++;
			nums[current] = nums[i];
		}
	}
	return current + 1;
}