const lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(1);
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1;  j < nums.length; j++){
            if(nums[j]  > nums[i] ){
                dp[j] = Math.max(dp[i] + 1, dp[j]);
            }
        }
    }
      return Math.max(...dp);
  };