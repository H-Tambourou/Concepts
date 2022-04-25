const containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    for(let i =0; i< nums.length; i++){
        if(map.has(nums[i])){
            const diff = map.get(nums[i]) - i;
            if(Math.abs(diff) <= k ) return true;
            map.set(nums[i], i);
        } else{
            map.set(nums[i], i);
        }
    }
    return false;
};
// time complexity - O(N)
// space complexity - O(N)