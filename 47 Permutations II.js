/*
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

For example,
[1,1,2] have the following unique permutations:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/

var helper = function(nums, res, arr, start, marks) {
    if (arr.length === nums.length) {
        res.push(arr.slice());
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (marks[i] === 0) {
            arr.push(nums[i]);
            marks[i] = 1;
            helper(nums, res, arr, 0, marks);
            arr.pop();
            marks[i] = 0;
            while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
                i++;
            }
        }
    }
}

var permuteUnique = function (nums) {
    nums.sort(function(a, b) { return a - b; });
    let res = [];
    let arr = [];
    let marks = new Array(nums.length).fill(0);
    helper(nums, res, arr, 0, marks);
    return res;
}
