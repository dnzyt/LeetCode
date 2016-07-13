/*
Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].
*/

var productExceptSelf = function (nums) {
	let res = [];
    let p = 1;
    for (let i = 0; i < nums.length; i++) {
        res.push(p);
        p *= nums[i];
    }
    
    p = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= p;
        p *= nums[i];
    }
    
    return res;
}