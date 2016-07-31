/*
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.
*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var helper = function (preorder, pStart, pEnd, inorder, iStart, iEnd) {
    if (pStart > pEnd) {
        return null;
    }

    let mid = iStart;
    for (let i = iStart; i <= iEnd; i++) {
        if (inorder[i] === preorder[pStart]) {
            mid = i;
            break;
        }
    }


    let root = new TreeNode(preorder[pStart]);
    root.left = helper(preorder, pStart + 1, pStart + mid - iStart, inorder, iStart, mid - 1);
    root.right = helper(preorder, pEnd - (iEnd - mid) + 1, pEnd, inorder, mid + 1, iEnd);

    return root;
}

var buildTree = function (preorder, inorder) {
    return helper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
}
