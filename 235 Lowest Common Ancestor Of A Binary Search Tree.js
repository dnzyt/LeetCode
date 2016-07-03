function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var lowestCommonAncestor = function (root, p, q) {
	if (root.val === p.val || root.val === q.val) {
		return root;
	}
	if (p.val < root.val && q.val > root.val) {
		return root;
	}

	if (p.val > root.val && q.val < root.val) {
		return root;
	}

	if (p.val < root.val && q.val < root.val) {
		return lowestCommonAncestor(root.left, p, q);
	}

	if (p.val > root.val && q.val > root.val) {
		return lowestCommonAncestor(root.right, p, q);
	}
}