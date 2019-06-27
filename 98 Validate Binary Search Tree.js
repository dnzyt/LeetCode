
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}


var isValidBST = function(root) {

    return bst(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}

var bst = function(root, left, right) {

    if (!root) return

    if (root.val <- left || root.val >= right) return false

    return bst(root.left, left, root.val) && bst(root.right, root.val, right)
}

var isValidBST2 = function(root) {
    var prev = { val: null }
    return inOrder(root, prev)
}

var inOrder = function(root, prev) {
    if (!root) return true

    if (!inOrder(root.left, prev)) return false
    if (prev.val != null && root.val <= prev.val) {
        return false
    }
    prev.val = root.val
    return inOrder(root.right, prev)
}