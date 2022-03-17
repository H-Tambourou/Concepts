const fib = function(n) {
    let res = new Array(n+1);
    res[0] = 0;
    res[1] = 1;
    for(let i = 2; i <= n; i++){
        res[i] = res[i -1] + res[i -2];
    };
    return res[n];
};

// time complexity is O(n)
// space complexity is O(n)

const res = console.log(fib(9), 'should be 34')