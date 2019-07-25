
function ListNode(val) {
    this.val = val
    this.next = null;
}

var mergeKLists = function (lists) {
    return merge(lists, 0, lists.length - 1)
}

var merge = function (lists, l, r) {
    if (l > r) return null
    if (l === r) return lists[l]
    var mid = l + Math.floor((r - l) / 2)
    return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r))

}

var mergeTwoLists = function (l1, l2) {

    var dummy = new ListNode(0)
    var p = dummy

    while (l1 && l2) {

        if (l1.val < l2.val) {
            p.next = l1
            l1 = l1.next
            p = p.next
        } else {
            p.next = l2
            l2 = l2.next
            p = p.next
        }

    }
    if (l1) p.next = l1
    if (l2) p.next = l2

    return dummy.next
}
