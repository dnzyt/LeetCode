/*
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
the contiguous subarray [4,−1,2,1] has the largest sum = 6.
*/

var maxSubArray = function (nums) {
	if (!nums || nums.length === 0) {
		return 0;
	}

	let sum = nums[0];
	let index = 0;
	for (index = 0; index < nums.length; index++) {
		if (nums[index] > 0) {
			sum = nums[index];
			index++;
			break;
		}
		sum = Math.max(sum, nums[index]);
	}

	if (index === nums.length) {
		return sum;
	}
	let maximum = sum;
	for (let i = index; i < nums.length; i++) {
		if (sum + nums[i] > 0) {
			sum += nums[i];
			maximum = Math.max(sum, maximum);
		} else {
			sum = 0;
		}
	}
	return maximum;
}