const isPalindrome = function(head) {
    let str = [];
    
    while (head) {
        str.push(head.val);
        head = head.next;
    };
    str = str.join('');
    const revStr = str.split('').reverse().join('');
    return str == revStr;
};
// time complexity O(n)
// space complexity O(n)