const deleteDuplicates = function(head) {
    let node = new ListNode(-200);
    let newHead = node;
    
    while(head){
        if(node.val === head.val){
            head = head.next;
            continue;
        }
        console.log(head.val)
        node.next = new ListNode(head.val);
        node = node.next;
        head = head.next;
    }
    return newHead.next;
    
};