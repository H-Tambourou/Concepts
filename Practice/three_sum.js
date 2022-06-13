const nums=[-1,0,1,2,-1,-4];

const threeSum = function(nums) {
    let res = [];
    if(nums.length < 3){return res};
    nums.sort((a,b) => a-b)
    
    for(let i=0; i < nums.length; i++){
        if(i>0 && nums[i] === nums[i-1]) continue;
        let L = i + 1;
        let R = nums.length - 1;
        const target = 0 - nums[i];
        while(L < R){
            if(nums[L] + nums[R] == target){
                res.push([nums[i],nums[L],nums[R]]);
                while(nums[L]===nums[L+1]) {
                    L++;
                };
                while(nums[R]===nums[R-1]) {
                    R--;
                }
                L++;
                R--;
            }
            else if(nums[L] + nums[R] > target){
                R--;
            }
            else{
                L++;
            };
        };
    }
    return res;
};//[[-1,-1,2],[-1,0,1]]
// Time complexity O(N^2)
// Space complexity O(N)