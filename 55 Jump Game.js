/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

For example:
A = [2,3,1,1,4], return true.

A = [3,2,1,0,4], return false.
*/

var canJump = function (nums) {
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (i > dp[i - 1]) {
            return false;
        }
        if (dp[i - 1] < i + nums[i]) {
            dp[i] = i + nums[i];
        } else {
            dp[i] = dp[i - 1];
        }
    }
    return dp[nums.length - 1] >= nums.length - 1 ? true : false;
}
