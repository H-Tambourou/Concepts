const reorderList = function(head) {
    
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let prev =  null;
    let cur = slow.next;
    while(cur){
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    
    slow.next = null
    
    let h1 = head;
    let h2 = prev;
    
    while(h2){
        let next = h1.next;
        h1.next = h2;
        h1 = h2;
        h2 = next;
    }
};
