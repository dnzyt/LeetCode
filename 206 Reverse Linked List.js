/*
Reverse a singly linked list.
*/

function ListNode(val) {
	this.val = val;
	this.next = null;
}

var reverseList = function (head) {
	if (!head || !head.next) {
		return head;
	}
	let current = head;
	let first = null;
	while (current.next) {
		let temp = current;
		current = current.next;
		temp.next = first;
		first = temp;
	}
	current.next = first;
	return current;
}

