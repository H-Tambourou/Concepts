// n is a positive integer
const num2binary = (n) => {
    let res = "";
    while(n >= 1){
        const remainder = n % 2;
        res += remainder;
        remainder === 1 ?
            n = Math.floor(n/2):
            n /= 2;
    }
    return res;
}
console.log(num2binary(5));
// or just use .toString(2)