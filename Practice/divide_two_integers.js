const divide = function(dividend, divisor) {
    if (dividend === 0) return 0;
    if (divisor === 1) return dividend;
    if (divisor === -1) {
        return (dividend === -2147483648) ? 2147483647 : -dividend;
    }
    let tot = Math.abs(dividend);
    let y = Math.abs(divisor);
    let i = 0;
    
    while(tot > 0){
        tot = tot - y;
        i++
        if(Math.sign(tot) == -1){
            i--
        }
    }
    const sign1 = Math.sign(dividend);
    const sign2 = Math.sign(divisor);
    return i * sign1 * sign2
};


// This is very slow look into for a better solution -> Bit manipulation