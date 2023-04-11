class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0); // Create a dummy node as the new head of the list
  dummy.next = head; // Set the next of the dummy node to the original head
  let fast = dummy; // Fast pointer starting from the dummy node
  let slow = dummy; // Slow pointer starting from the dummy node

  // Move the fast pointer n nodes ahead
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Move the fast and slow pointers together until fast pointer reaches the end
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Skip the nth node from the end by updating the next pointer of the previous node
  slow.next = slow.next.next;

  return dummy.next; // Return the head of the updated list
}