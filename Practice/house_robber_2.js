const rob = function(nums) {
    if(nums.length <= 3) return Math.max(...nums);
    
    const caseBuilder = (arr) => {
        if(arr.length < 3) return Math.max(...arr);
        
       for(let i = 2; i < arr.length; i++){
            arr[i] = Math.max(arr[i -2] + arr[i], (arr[i - 3] || 0) + arr[i]);
        } 
        console.log('see',arr)
        return Math.max(arr[arr.length -1], arr[arr.length -2])
    };
    
    const case1 = caseBuilder(nums.slice(0, nums.length -1));
    const case2 = caseBuilder(nums.slice(1, nums.length));
    return Math.max(case1, case2)
};