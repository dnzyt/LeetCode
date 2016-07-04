/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
*/

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var getHeight = function (root) {
	if (!root) {
		return 0;
	}
	if (!root.left && !root.right) {
		return 1;
	}
	return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

var isBalanced = function(root) {
	if (!root) {
		return true;
	}
	let lh = getHeight(root.left);
	let lr = getHeight(root.right);
	if (lh - lr > 1 || lr - lh > 1) {
		return false;
	}

	return isBalanced(root.left) && isBalanced(root.right);



}

