/*
Given an array of integers, every element appears three times except for one. Find that single one.
*/

var singleNumber = function(nums) {
    var bits = Array(32).fill(0);
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < 32; j++) {
            var rotated = nums[i] >> j;
            if (rotated !== 0) {
                bits[j] += (rotated & 1);
            } else {
                break;
            }
        }
    }
    
    var res = 0;
    for (var x = 0; x < bits.length; x++) {
        res += ((bits[x] % 3) << x);
    }
    return res;
};