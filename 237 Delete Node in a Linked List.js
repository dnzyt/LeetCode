/*
Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
*/


function ListNode(val) {
	this.val = val;
	this.next = null;
}

var deleteNode = function (node) {
	var temp = node;
	while (temp.next) {
		temp.val = temp.next.val;
		if (temp.next.next === null) {
			temp.next = null;
			break;
		}
		temp = temp.next;
	}
}