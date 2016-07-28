/*
Given a collection of integers that might contain duplicates, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets
*/

var helper = function(res, arr, nums, pos) {
    res.push(arr.slice());
    for (let i = pos; i < nums.length; i++) {
        if (i !== pos && nums[i] === nums[i - 1]) {
            continue;
        }
        arr.push(nums[i]);
        helper(res, arr, nums, i + 1);
        arr.pop();
    }
}

var subsetsWithDup = function (nums) {
    if (!nums || nums.length === 0) {
        return [];
    }

    nums.sort(function(a, b) { return a - b; });

    let res = [];
    let arr = [];
    helper(res, arr, nums, 0);

    return res;
}
