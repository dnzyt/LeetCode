/*
Given a set of distinct integers, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

var helper = function (nums, arr, res, start) {
    res.push(arr.slice());
    if (start === nums.length) {
        return;
    }

    for (let i = start; i < nums.length; i++) {
        arr.push(nums[i]);
        helper(nums, arr, res, i + 1);
        arr.pop();
    }


}

var subsets = function (nums) {
    let res = [];
    let arr = [];
    helper(nums, arr, res, 0);
    return res;
}
