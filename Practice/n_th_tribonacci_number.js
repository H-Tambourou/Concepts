const tribonacci = function(n) {
    let dp = new Array(n+1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 2;
    
    for(let i = 4; i <= n; i++){
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }
    return dp[n];
};
// time complexity - O(N)
// space complexity - O(N)