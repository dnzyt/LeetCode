function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

var serialize = function (root) {

    var sHelper = function (root) {
        if (!root) {
            sb.push('#')
            return
        }

        sb.push('' + root.val)
        sHelper(root.left)
        sHelper(root.right)
    }

    var sb = []
    sHelper(root)
    return sb.join(',')
}


var deserialize = function (data) {

    var dHelper = function (arr) {
        var c = arr.pop()
        if (c === '#') return null
        var root = new TreeNode(parseInt(c, 10))
        root.left = dHelper(arr)
        root.right = dHelper(arr)
        return root
    }

    var arr = data.split(',')
    return dHelper(arr.reverse())
}