/*
Given a binary tree, return the preorder traversal of its nodes' values.
*/

function TreeNode (val) {
	this.val = val;
	this.right = this.left = null;
}

var preorder = function (root, arr) {
	if (root === null) {
		return;
	}

	arr.push(root.val);
	preorder(root.left, arr);
	preorder(root.right, arr);
}

var preorderTraversal = function (root) {
	let res = [];
	preorder(root, res);
	return res;
}
