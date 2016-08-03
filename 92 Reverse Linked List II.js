/*
Reverse a linked list from position m to n. Do it in-place and in one-pass.

For example:
Given 1->2->3->4->5->NULL, m = 2 and n = 4,

return 1->4->3->2->5->NULL.

Note:
Given m, n satisfy the following condition:
1 ≤ m ≤ n ≤ length of list.
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var reverseBetween = function (head, m, n) {
    if (m === n) {
        return head;
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let current1 = dummy;
    let current2 = dummy;

    for (let i = 0; i < m - 1; i++) {
        current1 = current1.next;
    }

    for (let i = 0; i < n; i++) {
        current2 = current2.next;
    }
    let start = current1.next;
    current1.next = current2.next;
    current2.next = null;

    while (start) {
        let temp = start;
        start = start.next;
        temp.next = current1.next;
        current1.next = temp;
    }

    return dummy.next;
}
