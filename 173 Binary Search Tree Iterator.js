/*
Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    this.stack = [];
    this.pushLeft(root);
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length !== 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    let res = this.stack.pop();
    if (res.right) {
        this.pushLeft(res.right);
    }
    
    
    return res.val;
};

BSTIterator.prototype.pushLeft = function(root) {
    while (root) {
        this.stack.push(root);
        root = root.left;
    }
}

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/