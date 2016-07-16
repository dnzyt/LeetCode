/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
*/
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
var numOfNodes = function(root) {
    if (!root) {
        return 0;
    }
    
    return numOfNodes(root.left) + 1 + numOfNodes(root.right);
}
 
var kthSmallest = function(root, k) {
    let numLeft = numOfNodes(root.left);
    if (numLeft === k - 1) {
        return root.val;
    }
    
    if (numLeft >= k) {
        return kthSmallest(root.left, k);
    } else {
        return kthSmallest(root.right, k - numLeft - 1);
    }
};