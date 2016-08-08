/*
Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn't one, return 0 instead.

For example, given the array [2,3,1,2,4,3] and s = 7,
the subarray [4,3] has the minimal length under the problem constraint.
*/

/*
这种找区间的题就是left, right指针分别移动

*/

var minSubArrayLen = function (s, nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }

    let left = 0;
    let right = 0;

    let sum = 0;
    let res = nums.length + 1;


    while (right < nums.length) {
        while (sum < s && right < nums.length) {
            sum += nums[right++];
        }
        while (sum >= s && left < right) {
            res = Math.min(res, right - left);
            sum -= nums[left++];
        }
    }
    return res === nums.length + 1 ? 0 : res;
}
