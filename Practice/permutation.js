const permute = function(nums) {
    if(nums.length === 1) return [nums];
    if(nums.length === 2) return [nums.slice(), nums.slice().reverse()];
    
    let res = [];
    for(let i = 0; i < nums.length ; i++){
        let perm = permute([...nums.slice(0,i), ...nums.slice(i + 1)]);
        perm.forEach(x => res.push([nums[i], ...x]));
    };
    return res;
};