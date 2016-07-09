/*
Given a binary tree, return all root-to-leaf paths.
*/


function TreeNode(val) {
	this.val = val;
	this.right = this.left = null;
}

var deepTraverse = function (root, stack, res) {
	if (!root) {
		return;
	}
	if (!root.left && !root.right) {
		stack.push(root);
		let s = '';
		for (let node of stack) {
			if (s.length === 0) {
				s = s + node.val;
			} else {
				s = s + '->' + node.val;
			}
		}
		res.push(s);
		stack.pop();
		return;
	} else {
		stack.push(root);
		deepTraverse(root.left, stack, res);
		deepTraverse(root.right, stack, res);
		stack.pop();
	}
}

var binaryTreePaths = function (root) {
	let res = [];
	let stack = [];
	if (!root) {
		return res;
	}

	deepTraverse(root, stack, res);

	return res;
}