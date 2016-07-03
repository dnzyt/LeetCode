/*
Given a linked list, determine if it has a cycle in it.
*/

function ListNode(val) {
	this.val = val;
	this.next = null;
}

var hasCycle = function (head) {
	if (!head || !head.next) {
		return false;
	}
	let first = head;
	let second = head.next;

	while (second) {
		if (first === second) {
			return true;
		}
		first = first.next;
		second = second.next;
		if (!second) {
			return false;
		} else {
			second = second.next;
		}
	}
	return false;
}