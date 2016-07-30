/*
Given a sorted array of integers, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].
*/

var helper = function (nums, target, start, end, res) {
    if (start > end) {
        return;
    }

    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
        if (res.length === 0) {
            res.push(mid);
            res.push(mid);
            helper(nums, target, mid + 1, end, res);
            helper(nums, target, start, mid - 1, res);
        } else {
            if (res[1] < mid) {
                res[1] = mid;
                helper(nums, target, mid + 1, end, res);
            }
            if (res[0] > mid) {
                res[0] = mid;
                helper(nums, target, start, mid - 1, res);
            }
        }
    } else if (nums[mid] < target) {
        helper(nums, target, mid + 1, end, res);
    } else {
        helper(nums, target, start, mid - 1, res);
    }

}

var searchRange = function (nums, target) {
    let res = [];
    helper(nums, target, 0, nums.length - 1, res);
    if (res.length === 0) {
        return [- 1, -1];
    }
    return res;
}
