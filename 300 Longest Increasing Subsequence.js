/*
Given an unsorted array of integers, find the length of longest increasing subsequence.

For example,
Given [10, 9, 2, 5, 3, 7, 101, 18],
The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

Your algorithm should run in O(n2) complexity.
*/

/*
动态规划
比较nums[i]与之前所有值的大小，如果nums[i]大于nums[j] (j = 0, 1, 2, 3, 4...), 那么dp[i] = max(dp[i], dp[j] + 1)
dp中的数值表示到达该索引长度时的LIS
*/

var lengthOfLIS = function(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    let dp = [1];
    let res = 1;
    for (let i = 1; i < nums.length; i++) {
        dp.push(1);
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        res = Math.max(res, dp[i]);
    }
    return res
};