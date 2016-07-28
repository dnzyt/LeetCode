/*
Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
*/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sortedListToBST = function (head) {
    if (!head) {
        return null;
    }
    if (!head.next) {
        let root = new TreeNode(head.val);
        root.left = null;
        root.right = null;
        return root;
    }

    let first = head;
    let second = head.next;
    let temp = null;
    while (second) {
        temp = first;
        first = first.next;
        second = second.next;
        if (second) {
            second = second.next;
        }
    }
    temp.next = null;
    let root = new TreeNode(first.val);
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(first.next);

    return root;
}
