/*
Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1...n.

For example,
Given n = 3, your program should return all 5 unique BST's shown below.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/

/*
先构建每个节点的左子树和右子数，然后通过左右字数的不同组合来构建根节点
*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var helper = function(start, end) {
    let res = [];
    if (start > end) {
        res.push(null);
        return res;
    }

    for (let i = start; i <= end; i++) {
        let left = helper(start, i - 1);
        let right = helper(i + 1, end);
        for (let l of left) {
            for (let r of right) {
                let root = new TreeNode(i);
                root.left = l;
                root.right = r;
                res.push(root);
            }
        }
    }

    return res;
}

var generateTrees = function (n) {
    if (n === 0) {
        return [];
    }
    return helper(1, n);
}
