/*
The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.
*/

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

/*
root - index
left - index * 2 + 1
right - index *2 + 2
*/

var getMaximum = function (root, arr, index) {
	if (!root) {
		arr[index] = 0;
		return 0;
	}

	if(!root.left && !root.right) {
		arr[index] = root.val;
		return root.val;
	}

	let l = 0;
	let ll = 0;
	let lr = 0;
	if (root.left) {
		l = arr[index * 2 + 1] === undefined ? getMaximum(root.left, arr, index * 2 + 1) : arr[index * 2 + 1];
		arr[index * 2 + 1] = l;
		ll = arr[(index * 2 + 1) * 2 + 1] === undefined ? getMaximum(root.left.left, arr, (index * 2 + 1) * 2 + 1) : arr[(index * 2 + 1) * 2 + 1];
		arr[(index * 2 + 1) * 2 + 1] = ll;
		lr = arr[(index * 2 + 1) * 2 + 2] === undefined ? getMaximum(root.left.right, arr, (index * 2 + 1) * 2 + 2) : arr[(index * 2 + 1) * 2 + 2];
		arr[(index * 2 + 1) * 2 + 2] = lr;
	}
	
	let r = 0;
	let rl = 0;
	let rr = 0;
	if (root.right) {
		r = arr[index * 2 + 2] === undefined ? getMaximum(root.right, arr, index * 2 + 2) : arr[index * 2 + 2];
		arr[index * 2 + 2] = r;
		rl = arr[(index * 2 + 2) * 2 + 1] === undefined ? getMaximum(root.right.left, arr, (index * 2 + 2) * 2 + 1) : arr[(index * 2 + 2) * 2 + 1];
		arr[(index * 2 + 2) * 2 + 1] = rl;
		rr = arr[(index * 2 + 2) * 2 + 2] === undefined ? getMaximum(root.right.right, arr, (index * 2 + 2) * 2 + 2) : arr[(index * 2 + 2) * 2 + 2];
		arr[(index * 2 + 2) * 2 + 2] = rr;
	}

	let robbed = root.val + ll + lr + rl + rr;
	let notRobbed = l + r;

	return Math.max(robbed, notRobbed);
}
 
 
var rob = function(root) {
    var arr = [];
    return getMaximum(root, arr, 0);
};

