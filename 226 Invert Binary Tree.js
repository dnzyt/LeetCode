/*
	Invert a binary tree
*/

function TreeNode(val) {
	this.val = val;
	this.right = this.left = null;
}

var invertTree = function(root) {
	if (!root) {
		return root;
	}

	if (root.left === null && root.right === null) {
		return root;
	}

	var left = invertTree(root.right);
	var right = invertTree(root.left);
	root.left = left;
	root.right = right;
	return root;
}