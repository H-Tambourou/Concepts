function mergeAB(a, b) {
    let dummy = new ListNode(-1);
    let head = dummy;
    
    while(a && b) {
        if(a.val < b.val){
            dummy.next = new ListNode(a.val);
            a = a.next;
        }else{
            dummy.next = new ListNode(b.val);
            b = b.next;
        }
        dummy = dummy.next;
    }
    if(a){
        dummy.next = a
    }
    if(b){
        dummy.next = b
    }
    return head.next
}

const mergeKLists = function(lists) {
    if(lists.length === 0 ){
        return null
    }
    
    while(lists.length > 1){
        let listA = lists.shift();
        let listB = lists.shift();
        let list = mergeAB(listA, listB);
        lists.push(list);
    }
return lists[0];
};


//Look up a Min Heap to better solve this solution 
//Min Heap (can hold K elements) - to extract the small elements between elements 