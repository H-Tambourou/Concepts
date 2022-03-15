const reverseList = function(head) {
    let current = new ListNode();
    while(head){
    current.val = head.val;
    let temp = new ListNode();
    temp.next = current;
    current = temp;
    head = head.next;
    }
    return console.log(current.next);
};