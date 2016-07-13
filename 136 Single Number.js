/*
Given an array of integers, every element appears twice except for one. Find that single one.
*/

var singleNumber = function (nums) {
	if (!nums || nums.length === 0) {
        return 0;
    }
    
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        res = res ^ nums[i];
    }
    
    return res;
    
}