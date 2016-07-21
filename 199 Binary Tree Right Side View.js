/*
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
You should return [1, 3, 4].
*/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var helper = function(root, pos, res) {
	if (!root) {
		return;
	}

	if (!res[pos]) {
		res[pos] = root.val;
	}
	helper(root.right, pos + 1, res);
	helper(root.left, pos + 1, res);
}
 
var rightSideView = function(root) {
    let res = [];
    helper(root, 0, res);
    let ret = [];
    for (let v of res) {
        if (v) {
            ret.push(v);
        }
    }
    return ret;
};