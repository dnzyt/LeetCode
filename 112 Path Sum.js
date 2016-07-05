/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
*/

function TreeNode(val) {
	this.val = val;
	this.right = this.left = null;
}

var hasPathSum = function (root, sum) {
	if (!root) {
		return false;
	}
	if (root.val === sum && root.left === null && root.right === null) {
		return true;
	}

	return  hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}
