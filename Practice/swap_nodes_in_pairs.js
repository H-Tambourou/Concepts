const swapPairs = function(head) {
    if(!head || !head.next){
        return head
    }
    let prev = head;
    let cur = head.next;
    prev.next = swapPairs(cur.next);
    cur.next = prev;
    return cur;
    
};