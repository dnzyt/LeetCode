/*
Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies: Si % Sj = 0 or Sj % Si = 0.

If there are multiple solutions, return any subset is fine.

Example 1:

nums: [1,2,3]

Result: [1,2] (of course, [1,3] will also be ok)
Example 2:

nums: [1,2,4,8]

Result: [1,2,4,8]
*/

/*
动态规划
从后往前，每一个dp[i]存放的都是从后往前到这个位置所能组成的序列的最长值，
用current_index表示当前拥有最长值位置的索引,parent中存放的是当前数在序列中的下一个值的位置
*/

var largestDivisibleSubset = function (nums) {
    nums.sort(function(a, b) { return a - b });
    let res = [];
    let dp = new Array(nums.length).fill(0);
    let parent = new Array(nums.length).fill(0);
    let v = 0;
    let current_index = 0;
    let v_index = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i; j < nums.length; j++) {
            if (nums[j] % nums[i] === 0 && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                parent[i] = j;
                if (v < dp[i]) {
                    v = dp[i];
                    current_index = i;
                }

            }
        }
    }

    for (let i = 0; i < v; i++) {
        res.push(nums[current_index]);
        current_index = parent[current_index];
    }
    return res;
}
