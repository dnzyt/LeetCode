/*
Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root down to the farthest leaf node.
*/

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var maxDepth = function(root) {
	if(!root) {
		return 0;
	}
	if(root.left === null && root.right === null) {
		return 1;
	}

	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}