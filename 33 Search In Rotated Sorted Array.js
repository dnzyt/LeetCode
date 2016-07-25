/*
Suppose a sorted array is rotated at some pivot unknown to you beforehand.
(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicates exists in the array.
*/

var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);

    while (left < right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < nums[right]) {
            if (nums[mid] < target) {
                if (target < nums[right]) {
                    left = mid + 1;
                    continue;
                } else if (target > nums[right]) {
                    right = mid - 1;
                    continue;
                } else {
                    return right;
                }
            } else {
                right = mid - 1;
            }
        } else {
            if (nums[mid] > target) {
                if (target > nums[left]) {
                    right = mid - 1;
                    continue;
                } else if (target < nums[left]) {
                    left = mid + 1;
                    continue;
                } else {
                    return left;
                }
            } else {
                left = mid + 1;
            }
        }
    }
    mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
        return mid;
    } else {
        return -1;
    }
}
