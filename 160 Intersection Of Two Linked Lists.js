/*
Write a program to find the node at which the intersection of two singly linked lists begins.
*/

function ListNode(val) {
	this.val = val;
	this.next = null;
}

// Solution 1: 找出长度差值，然后把长的那个向前移动差值，然后两个指针一起移动

var getIntersectionNode = function(headA, headB) {
	let lenA = 0;
	let lenB = 0;
	let currentA = headA;
	let currentB = headB;
	while(currentA) {
		lenA++;
		currentA = currentA.next;
	}

	while(currentB) {
		lenB++;
		currentB = currentB.next;
	}

	currentA = headA;
	currentB = headB;

	if (lenA > lenB) {
		let dif = lenA - lenB;
		for (let i = 0; i < dif; i++) {
			currentA = currentA.next;
		}
	} else if (lenA < lenB) {
		let dif = lenB - lenA;
		for (let i = 0; i < dif; i++) {
			currentB = currentB.next;
		}
	}
	while (currentA) {
		if (currentA === currentB) {
			return currentA;
		}
		currentA = currentA.next;
		currentB = currentB.next;
	} 


	return null;
}


// Solution 2: A和B分别开始向后移动，每次移动一位，如果A遇到末尾，那么把A指向B的头，然后继续移动，如果B指向了末尾，那么用B指向A的头，继续向下移动，如果A等于B那么返回A或者B，如果A和B同时指向null，那么说明没有intersection.

