const isPalindrome = function(num) {
const num = num.toString().split('').reverse().join('');
const addNum = num * 1;
const val = num + addNum;
let revVal = val.toString().split('').reverse().join('');
revVal = revVal * 1;

if(!revVal == num) {
 isPalindrome(num);
}
else{
    return num;
}
};