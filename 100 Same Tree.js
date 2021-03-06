/*
Given two binary trees, write a function to check if they are equal or not.
Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
*/

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var isSameTree = function (p, q) {
	if (p === null && q !== null) {
		return false;
	}
	if (p !== null && q === null) {
		return false;
	}

	if (p === null && q === null) {
		return true;
	}
	if (p.val !== q.val) {
		return false;
	}
	if (p.val === q.val) {
		return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
	}
}