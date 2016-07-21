/*
Given a binary tree, return the inorder traversal of its nodes' values.
*/

function TreeNode(val) {
	this.val = val;
	this.right = this.left = null;
}

var inroder = function (root, arr) {
	if (root === null) {
		return;
	}
	inroder(root.left, arr);
	arr.push(root.val);
	inroder(root.right, arr);
}


var inorderTraversal = function (root) {
	let res = [];
	inroder(root, res);
	return res;
}
