/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
*/

/*
最大抢劫金钱数为(抢第N家 + 之前抢的钱)与(不抢第N家)的最大值
a[N] = Math.max(nums[N] + a[N - 2], a[N - 1])
*/

var rob = function(nums) {
	if (!nums || nums.length === 0) {
		return 0;
	}
	if (nums.length === 1) {
		return nums[0];
	}
	if (nums.length === 2) {
		return Math.max(nums[0], nums[1]);
	}

	let a = [nums[0], Math.max(nums[0], nums[1])];
	for (let i = 2; i < nums.length; i++) {
		a.push(Math.max(nums[i] + a[i - 2], a[i - 1]));
	}
	return a[nums.length - 1];

}