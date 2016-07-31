/*
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

/*
两边夹逼
*/


var threeSumClosest = function (nums, target) {
    nums.sort(function(a, b) {
        return a - b;
    });

    let res = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums.length - 2; i++) {
        let low = i + 1;
        let high = nums.length - 1;

        while (low < high) {
            let sum = nums[i] + nums[low] + nums[high];
            if (Math.abs(sum - target) < min) {
                min = Math.abs(sum - target);
                res = sum;
            }

            if (target === sum) {
                return sum;
            } else if (sum < target) {
                low++;
            } else {
                high--;
            }
        }

    }
    return res;
}
