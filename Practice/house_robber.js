const rob = function(nums) {
    if(!nums.length) return 0;
    if(nums.length ===1) return nums[0];
    if(nums.length === 2) return Math.max(...nums);

    for(let i = 2; i < nums.length; i++){
        nums[i] = Math.max(nums[i-2] + nums[i], (nums[i-3] || 0) + nums[i]);
    }
    return Math.max(nums[nums.length-1], nums[nums.length-2])
}

// time complexity is O(N)
// space complexity is O(1)