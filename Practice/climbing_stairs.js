const climbStairs = function(n) {
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