/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
*/

function ListNode(val) {
	this.val = val;
	this.next = null;
}

var mergeTwoLists = function (l1, l2) {
	var dummy = new ListNode(0)

	var tail = dummy;

	while (l1 && l2) {
		if (l1.val < l2.val) {
			tail.next = l1
			l1 = l1.next
		} else {
			tail.next = l2
			l2 = l2.next
		}
		tail = tail.next
	}

	if (l1) tail.next = l1
	if (l2) tail.next = l2

	return dummy.next

}

var mergeTwoLists2 = function (l1, l2) {

	if (!l1 || !l2) return l1 ? l1 : l2

	if (l1.val < l2.val) {
		l1.next = mergeTwoLists2(l1.next, l2)
		return l1
	} else {
		l2.next = mergeTwoLists2(l1, l2.next)
		return l2
	}

}