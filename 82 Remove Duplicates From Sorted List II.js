/*
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

For example,
Given 1->2->3->3->4->4->5, return 1->2->5.
Given 1->1->1->2->3, return 2->3.
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var deleteDuplicates = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let dummy = new ListNode(0);
    dummy.next = head;

    let current = head.next;
    let prev = head;
    let count = 1;

    while (true) {
        while (current && prev.val === current.val) {
            current = current.next;
            count++;
        }
        if (count > 1) {
            if (!current) {
                return null;
            }

            dummy.next = current;
            prev = current;
            current = current.next;
            count = 1;
        } else {
            break;
        }

    }
    count = 1;
    while (current) {
        while (current.next && current.val === current.next.val) {
            current = current.next;
            count++
        }
        if (count > 1) {
            prev.next = current.next;
            current = current.next;
            count = 1;
        } else {
            current = current.next;
            prev = prev.next;
        }
    }

    return dummy.next;

}
