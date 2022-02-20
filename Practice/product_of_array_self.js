const productExceptSelf = function(nums) {
    let res = new Array(nums).fill(0);
    // suffix element on the right
    res[nums.length - 1] = 1
    for( let i = res.length - 2; i >= 0; i--) {
        res[i] = res[i+1] * nums[i+1];
    }
   
    let prefix = 1; // prefix element on the left
    for(let i = 1; i < nums.length; i++) {
        prefix = prefix * nums[i-1];
        res[i] = prefix * res[i];
    }
    return res
};

// time complexity O(n)
// space complexity exluding the res is O(1)