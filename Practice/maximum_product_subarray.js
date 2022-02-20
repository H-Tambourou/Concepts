// Dynamic Programming

const maxProduct = function(nums) {
    let res = Math.min(...nums);
    let min= 1;
    let max= 1;
    
    let cases = [];
    for(let i = 0; i < nums.length; i++){
        let tempMin = min * nums[i];
        let tempMax = max * nums[i];
        cases = [tempMin, tempMax, nums[i]]
        
        max = Math.max(...cases)
        min = Math.min(...cases)
        
        res = Math.max(res, max)
    }
    return res;
};