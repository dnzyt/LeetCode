/*
Given a binary tree, check whether it is a mirror of itself.
*/

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var flap = function (root) {
	if (!root) {
		return;
	}
	let temp = root.left;
	root.left = root.right;
	root.right = temp;
	flap(root.left);
	flap(root.right);
}

var isSame = function (r1, r2) {
	if (!r1 && r2) {
		return false;
	}
	if (r1 && !r2) {
		return false;
	}
	if (!r1 && !r2) {
		return true;
	}
	if (r1.val !== r2.val) {
		return false;
	}
	return isSame(r1.left, r2.left) && isSame(r1.right, r2.right);
}

var isSymmetric = function (root) {
	if (!root || (!root.left && !root.right)) {
		return true;
	}
	flap(root.right);
	return isSame(root.left, root.right);

}