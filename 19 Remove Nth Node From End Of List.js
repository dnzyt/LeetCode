/*
Given a linked list, remove the nth node from the end of list and return its head.
*/

function ListNode(val) {
	this.val = val;
	this.next = null;
}

var removeNthFromEnd = function (head, n) {
	if (!head.next && n === 1) {
		return null;
	}
	let first = head;
	let second = head;
	while (n > 0) {
		second = second.next;
		n--;
	}
	if (!second) {
		return head.next;
	}

	while (second.next) {

		first = first.next;
		second = second.next;
	}

	first.next = first.next.next;
	
	return head;
}