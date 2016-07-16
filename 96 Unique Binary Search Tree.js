/*
Given n, how many struturally unique BST's that store values 1...n?
*/

/*
可行二叉树的个数等于从1到n所有节点为根时可行情况的和，
例如当节点为2时，可行二叉树的个数等于所有小于1的节点可行二叉树个数乘以所有大于2的节点所组成的可行二叉树的个数的积
*/

var numTrees = function (n) {
	let dp = [1, 1];
	for (let i = 2; i <= n; i++) {
		res[i] = 0;
		for (let j = 0; j < i; j++) { //j等于零时，说明左子树为空
			res[i] += (res[j] * res[i - 1 - j]);
		}
	}

	return res[n];
