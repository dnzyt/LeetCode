/*
Given inorder and postorder traversal of a tree, construct the binary tree.
*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var helper = function (inorder, iStart, iEnd, postorder, pStart, pEnd) {
    if (iStart === iEnd) {
        return new TreeNode(inorder[iStart]);
    } else if (iStart > iEnd) {
        return null;
    }
    if (pStart === pEnd) {
        return new TreeNode(postorder[pStart]);
    } else if (pStart > pEnd) {
        return null;
    }
    let root = new TreeNode(postorder[pEnd]);
    let mid = 0;
    for (let i = iStart; i <= iEnd; i++) {
        if (inorder[i] === postorder[pEnd]) {
            mid = i;
            break;
        }
    }
    root.left = helper(inorder, iStart, mid - 1, postorder, pStart, pStart + mid - iStart - 1);
    root.right = helper(inorder, mid + 1, iEnd, postorder, pEnd - 1 - (iEnd - mid) + 1, pEnd - 1);
    return root;
}

var buildTree = function (inorder, postorder) {
    if (inorder.length === 0) {
        return null;
    }
    return helper(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
}
