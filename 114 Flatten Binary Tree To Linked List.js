/*
Given a binary tree, flatten it to a linked list in-place.
*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var flatten = function (root) {
    if (!root) {
        return;
    }

    if (!root.left && !root.right) {
        return;
    }

    if (root.left && !root.right) {
        flatten(root.left);
        root.right = root.left;
        root.left = null;
        return;
    }

    if (!root.left && root.right) {
        flatten(root.right);
        return;
    }

    flatten(root.left);
    flatten(root.right);
    let temp = root.right;
    root.right = root.left;
    root.left = null;
    let current = root.right;
    while (current.right) {
        current = current.right;
    }
    current.right = temp;
    return;

}
