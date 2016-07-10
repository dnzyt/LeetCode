/*
Rotate an array of n elements to the right by k steps.
For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4]. 
*/


var reverse = function(nums, i, j) {
    while (i < j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
}

var rotate = function (nums, k) {
	if (!nums || k === 0) {
		return;
	}
	k = k % nums.length;

	reverse(nums, 0, nums.length - k - 1);
	reverse(nums, nums.length - k, nums.length - 1);

	nums.reverse();
}