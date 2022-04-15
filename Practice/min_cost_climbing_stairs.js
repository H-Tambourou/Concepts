const minCostClimbingStairs = function(cost) {
    let DP = [0, 0];
    
    for(let i =2; i <= cost.length; i++){
        DP[i] = Math.min(cost[i-2] + DP[i-2], cost[i-1] + DP[i-1]);
    }
    return DP[cost.length];
};
// time complexity O(N);
// space complexity O(N)