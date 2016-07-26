/*
Follow up for "Search in Rotated Sorted Array":
What if duplicates are allowed?

Would this affect the run-time complexity? How and why?

Write a function to determine if a given target is in the array.
*/

var search = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            return true;
        }
    }
    return false;
};
