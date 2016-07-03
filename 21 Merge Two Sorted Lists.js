/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
*/

function ListNode(val) {
	this.val = val;
	this.next = null;
}

var mergeTwoLists = function (l1, l2) {
	if (!l1) {
		return l2;
	}
	if (!l2) {
		return l1;
	}

	let head = l1;
	if (l1.val > l2.val) {
		head = l2;
		l2 = l2.next;
	} else {
		l1 = l1.next;
	}
	let current = head;
	while (l1 && l2) {
		if (l1.val < l2.val) {
			current.next = l1;
			current = l1;
			l1 = l1.next;
		} else {
			current.next = l2;
			current = l2;
			l2 = l2.next;
		}
	}

	if (l1) {
		current.next = l1;
	}

	if (l2) {
		current.next = l2;
	}

	return head;

}