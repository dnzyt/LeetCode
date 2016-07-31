/*
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

var helper = function (nums, arr, res, start, ts) {
    if (arr.length === 3) {
        if (ts === 0) {
            res.push(arr.slice());
        }
        return;
    }

    for (let i = start; i < nums.length; i++) {
        if (nums[i] <= ts) {
            arr.push(nums[i]);
            helper(nums, arr, res, i + 1, ts - nums[i]);
            arr.pop();
            while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
                i++;
            }
        } else {
            break;
        }
    }
}

var threeSum = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    let res = [];
    let arr = [];
    helper(nums, arr, res, 0, 0);

    return res;
}
