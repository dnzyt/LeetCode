

function TreeNode(val) {
    this.val = val
    this.left = this.right = null;
}

var getMinimumDifference = function(root) {
    var res = { val: Number.MAX_SAFE_INTEGER }
    var prev = { val: null }
    bst(root, prev, res)


    return res.val
}

var bst = function(root, prev, res) {
    if (!root) return

    bst(root.left, prev, res)
    if (prev.val !== null) {
        res.val = Math.min((root.val - prev.val), res.val)
    }
    prev.val = root.val
    bst(root.right, prev, res)
}