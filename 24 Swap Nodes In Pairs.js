/*
Given a linked list, swap every two adjacent nodes and return its head.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
*/

function ListNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var swapPairs = function (head) {
	if (!head || !head.next) {
		return head;
	}
	let res = head.next;
	let first = head;
	let second = head.next;
	first.next = second.next;
	second.next = first;
	second = first.next;


	while (second) {
		if (!second.next) {
			break;
		}
		first.next = second.next;
		first = first.next;
		second.next = first.next;
		first.next = second;

		first = second;
		second = second.next;
	}

	return res;
}