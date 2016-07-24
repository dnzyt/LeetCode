/*
Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

For example,

    1
   / \
  2   3
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.

Return the sum = 12 + 13 = 25.
*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var helper = function (root, nums, res) {
    if (!root.left && !root.right) {
        nums.push(root.val);
        if (nums.length !== 0) {
            res.push(nums.join(''));
        }
        nums.pop();
        return;
    }
    nums.push(root.val);
    if (root.left) {
        helper(root.left, nums, res);
    }
    if (root.right) {
        helper(root.right, nums, res);
    }
    nums.pop();


}

var sumNumbers = function (root) {
    if (!root) {
        return 0;
    }
    let nums = [];
    let res = [];
    helper(root, nums, res);
    let sum = 0;
    for (let v of res) {
        sum += parseInt(v);
    }
    return sum;
}
