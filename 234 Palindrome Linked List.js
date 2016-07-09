/*
Given a singly linked list, determine if it is a palindrome.
*/

/*
回文其实就是栈
*/

function ListNode(val) {
	this.val = val;
	this.next = null;
}

var isPalindrome = function (head) {
	if (!head || !head.next) {
		return true;
	}

	let first = head;
	let second = head;

	let stack = [];
	let count = 0;

	while (second) {
		count++;
		stack.push(first.val);
		first = first.next;
		second = second.next;
		if (second) {
			count++;
			second = second.next;
		}
	}

	//如果链表长度是奇数，那么要后退一位
	if (count % 2 !== 0) {
		stack.pop();
	}

	while(stack.length !== 0) {
		if (stack.pop() !== first.val) {
			return false;
		} else {
			first = first.next;
		}
	}


	return true;
}