const plusOne = function(digits) {
    const str = digits.join().replace(/,/g,'');
    let num = BigInt(str);
    num+=1n;
    let arr = Array.from(String(num), Number);
    return arr;
};