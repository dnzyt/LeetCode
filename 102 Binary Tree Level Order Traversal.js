/*
Given a binary tree, return the level order traversal of its nodes'values.
*/

/*
类似广度优先遍历 BFT
Store each level into a new queue
*/

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var levelElements = function (container, queue) {
	if (queue.length === 0) {
		return;
	}

	let newQueue = [];
	let temp = [];

	while (queue.length !== 0) {
		let node = queue.shift();
		temp.push(node.val);
		if (node.left) {
			newQueue.push(node.left);
		}
		if (node.right) {
			newQueue.push(node.right);
		}
	}

	container.push(temp);

	levelElements(container, newQueue);
}


var levelOrder = function (root) {
	if (!root) {
		return [];
	}

	let container = [];
	let queue = [root];

	levelElements(container, queue);

	return container;
}