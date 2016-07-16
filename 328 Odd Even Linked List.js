/*
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
*/

function ListNode(val) {
	this.val = val;
	this.next = null;
}

var oddEvenList = function (head) {
	if (!head || head.next === null) {
		return head;
	}

	let temp = head.next;

	let he = head;
	let ho = head.next;

	while (true) {
		if (he.next === null) {
			ho.next = null;
			break;
		}

		if (ho.next === null) {
			he.next = null;
			break;
		}

		if (he.next === ho) {
			he.next = ho.next;
			he = ho.next;
			continue;
		}

		if (ho.next === he) {
			ho.next = he.next;
			ho = he.next;
			continue;
		}
	}

	he.next = temp;
	return head;
}