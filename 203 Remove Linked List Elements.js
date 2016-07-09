/*
Remove all elements from a linked list of integers that have value val.
*/

function ListNode(val) {
	this.val = val;
	this.next = null;
}


var removeElements = function (head, val) {
	while(head && head.val === val) {
		head = head.next;
	}

	if (!head) {
		return null;
	}

	let first = head;
	let second = head.next;

	while (second) {
		if (second.val === val) {
			first.next = second.next;
			second = second.next;
		} else {
			first = first.next;
			second = second.next;
		}
	}

	return head;
}