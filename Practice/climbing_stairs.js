const climbStairsOld = function(n) {
    if(n==1){
        return 1;
    }else if(n==2){
        return 2;
    };
    let step1 = 1;
    let step2 = 2;
    for(let i=3; i<=n; i++){
        let steps = step1 + step2;
        step1 = step2;
        step2 = steps;
    }
    return step2;
};

// Better solution - Bottom up approach - Dynamic Programming
const climbStairs = function(n) {
    let store = [];
    store[1] = 1;
    store[2] = 2;
    for(let i = 3; i <= n; i++){
        store[i] = store[i-1] + store[i-2];
    }
    return store[n];
};