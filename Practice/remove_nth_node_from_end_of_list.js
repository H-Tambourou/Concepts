// if we want to delete a node we need the node before it
const removeNthFromEnd = function(head, n) {
    let fast, slow;
    fast = slow = head;
    
    //slow will always be trailing fast by n
    
    while(n--) {
        fast = fast.next;
    }
    if(!fast) {
        return head.next;
    }
    while(fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head 
};