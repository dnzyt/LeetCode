/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root)
*/

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}


ar levelElements = function (arr, queue) {
	if (queue.length === 0) {
		return;
	}
	let newQueue = [];
	let newArr = [];
	for (let node of queue) {
		newArr.push(node.val);
		if (node.left) {
			newQueue.push(node.left);
		}
		if (node.right) {
			newQueue.push(node.right);
		}
	}
	arr.push(newArr);
	levelElements(arr, newQueue);
}

var levelOrderBottom = function (root) {
	if (!root) {
		return []
	}

	let container = [];
	let queue = [root];
	levelElements(container, queue);
	return container.reverse();
}