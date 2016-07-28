/*
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Note: Do not modify the linked list.
*/

/*
设置两个指针A和B，A每次挪动一步，B每次挪动两步，
如果B为空，说明没有环路，返回null
如果A在某一时刻等于B，说明有环路，那么此时A走过的路程为无环路部分加上有环路部分，B走过的路程是A的二倍，也就是说B走过了两个无环路部分和两个有环路部分，如果此时B每次只挪动一步，那么它回到当前位置时就需要走过一次无环路部分和一个有环路部分，现在把A挪回到起点，然后每次A和B各走一步，比较A和B是否相等，如果相等，那么该点就是环路的起点
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var detectCycle = function (head) {
    if (!head || !head.next) {
        return null;
    }

    let first = head;
    let second = head.next;
    while (second && first !== second) {
        first = first.next;
        second = second.next;
        if (!second) {
            break;
        } else {
            second = second.next;
        }
    }

    if (!second) {
        return null;
    }

    first = head;
    second = second.next;//当设置first = head时, first已经移动了一位，所以seconde也要移动一位
    while (first !== second) {
        first = first.next;
        second = second.next;
    }

    return first;
}
