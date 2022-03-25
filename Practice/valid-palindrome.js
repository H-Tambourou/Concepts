const isPalindrome = function(s) {  
    let str = "";
     for(let i=0; i < s.length; i++){
         char = s[i].toLowerCase();
         if((char >= 'a' && char <= 'z') || Number.isInteger(parseInt(s[i])) ){
             str+= char;
         }
     }
     return str === str.split('').reverse().join('')
 };
 // time complexity is O(N)
 // space complexity is O(1)