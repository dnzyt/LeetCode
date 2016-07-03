/*
Given a sorted linked list, delete all duplicates such that each elements appear only once.
*/

function ListNode(val) {
	this.val = val;
	this.right = this.left = null;
}

var deleteDuplicates = function (head) {
	if (!head) {
		return head;
	}

	let current = head;
	let pointer = head.next;
	while (pointer) {
		if (current.val !== pointer.val) {
			current.next = pointer;
			current = pointer;
		}
		pointer = pointer.next;
	}
	current.next = pointer;

	return head;
}