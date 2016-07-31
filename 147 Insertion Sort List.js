/*
Sort a linked list using insertion sort.
*/

var insertionSortList = function (head) {
    if (!head) {
        return head;
    }
    let current = head.next;
    head.next = null;
    let res = head;
    while (current) {
        let temp = current;
        current = current.next;
        temp.next = null;

        let resCurrent = res;
        let resPrev = null;
        while (resCurrent) {
            if (temp.val <= resCurrent.val) {
                if (!resPrev) {
                    temp.next = res;
                    res = temp;
                    break;
                } else {
                    temp.next = resCurrent;
                    resPrev.next = temp;
                    break;
                }
            } else {
                if (!resCurrent.next) {
                    resCurrent.next = temp;
                    break;
                }
                resPrev = resCurrent;
                resCurrent = resCurrent.next;
            }

        }

    }
    return res;
}
