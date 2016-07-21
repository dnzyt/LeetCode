/*
Given a binary tree

    struct TreeLinkNode {
      TreeLinkNode *left;
      TreeLinkNode *right;
      TreeLinkNode *next;
    }
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
*/

function TreeLinkNode (val) {
	this.val = val;
	this.left = this.right = this.next = null;
}

var connect = function (root) {
	if (!root || !root.left) {
		return;
	}
	root.left.next = root.right;
	let currentL = root.left.right;
	let currentR = root.right.left;
	while (currentL) {
		currentL.next = currentR;
		currentL = currentL.right;
		currentR = currentR.left;
	}

	connect(root.left);
	connect(root.right);
}
