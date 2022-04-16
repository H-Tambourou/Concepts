const removeElements = function(head, val) {
    let dummyNode = new ListNode(0, head);
    let prev = dummyNode;
    let cur = head;
    
    while(cur){
        if(cur.val == val){
            prev.next = cur.next;
        } else{
            prev = cur;
        }
        cur = cur.next;
    }
    return dummyNode.next;
};