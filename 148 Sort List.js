

function ListNode(val) {
    this.val = val
    this.next = null
}

var sortList = function (head) {

    if (!head || !head.next) return head

    var len = 0
    var curr = head
    while (curr) {
        ++len
        curr = curr.next
    }
    var dummy = new ListNode(0)
    dummy.next = head

    for (var i = 1; i < len; i <<= 1) {
        var tail = dummy
        curr = dummy.next
        while (curr) {
            var l = curr
            var r = split(l, i)
            curr = split(r, i)

            var temp = merge(l, r)

            tail.next = temp.h
            tail = temp.t
        }
    }
    return dummy.next
}

var split = function (l, n) {

    while (--n && l) {
        l = l.next
    }

    var rest = l ? l.next : null
    if (l) l.next = null

    return rest
}


var merge = function (l1, l2) {

    var dummy = new ListNode(0)
    var tail = dummy

    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1
            l1 = l1.next
        } else {
            tail.next = l2
            l2 = l2.next
        }

        tail = tail.next
    }

    if (l1) tail.next = l1
    if (l2) tail.next = l2

    while (tail.next) {
        tail = tail.next
    }

    return {
        h: dummy.next,
        t: tail
    }
}

