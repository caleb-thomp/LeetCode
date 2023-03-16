function addTwoNumbers(l1, l2) {
    let carry = 0;
    let dummy = new ListNode(0);
    let curr = dummy;
    while (l1 !== null || l2 !== null) {
        let sum = carry;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummy.next;
}
