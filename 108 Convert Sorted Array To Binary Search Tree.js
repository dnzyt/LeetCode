/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
*/

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var helper = function (nums, begin, end) {
	if (begin <= end) {
		let mid = Math.floor((begin + end) / 2);
		let root = new TreeNode(nums[mid]);
		root.left = helper(nums, begin, mid - 1);
		root.right = helper(nums, mid + 1, end);
		return root;
	} else {
		return null;
	}
}

var sortedArrayToBST = function (nums) {
	return helper(nums, 0, nums.length - 1);
}