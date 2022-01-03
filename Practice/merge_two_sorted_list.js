const mergeTwoLists = function(list1, list2) {
    
    let node = new ListNode(-1);
    let head = node;
    
    while(list1 && list2){
        if(list1.val > list2.val){
            node.next = new ListNode(list2.val);
            node = node.next;
            list2 = list2.next;
        }
        else if(list2.val > list1.val){
            node.next = new ListNode(list1.val);
            node = node.next;
            list1 = list1.next;
        }
        else {
            node.next = new ListNode(list2.val);
            node = node.next;
            list2 = list2.next;
            
            node.next = new ListNode(list1.val);
            node = node.next;
            list1 = list1.next;
        }
    }
    if(list1) {node.next = list1};
    if(list2) {node.next = list2};
    
    return head.next;
    
};