const missingNumber = function(nums) {
    let res = 0;
    for(let i=0; i <= nums.length; i++){
        if(!nums.find(e => e==i)){
            res = i;
        }
    }
    return res;
};