const multiply = function(num1, num2) {
    let val1 = BigInt(num1);
    let val2 = BigInt(num2);
    return eval(val1 * val2).toString();
};