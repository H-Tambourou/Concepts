const maxSubArray = function(nums) {
    let tempMax=0;
    let max =Math.min(...nums);
    for(let i=0; i <nums.length; i++){
        tempMax += nums[i];
        max = Math.max(max, tempMax);
        if(tempMax < 0){
            tempMax = 0;
        }
    }
    return max
};