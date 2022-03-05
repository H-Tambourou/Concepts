const coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
      
      for(let i = 1; i <= amount; i++){
          for(let coin of coins){
              if(i >= coin){
                  dp[i] = Math.min(dp[i], dp[i - coin] +1);
              }
          }
      }
      console.log(dp)
      return dp[amount] == Infinity ? -1 : dp[amount];
  };

  // time complexity O()