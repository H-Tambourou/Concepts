const jump = function(nums) {
    let nextJump = 0;
    let curJump = 0;
    let count = 0;
    
    for(let i = 0; i < nums.length - 1; i++){
        nextJump = Math.max(nextJump, nums[i] + i);
        
        if(i === curJump){
            count++;
            curJump = nextJump;
        };
    }
    return count;
};