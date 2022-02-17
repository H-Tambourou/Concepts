const containsDuplicate = function(nums) {
    let map = new Map();
    for(let i=0; i < nums.length; i++){
        if(map.has(nums[i])){
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
};

// used a hash map
// time complexity - O(n)
// space complexity - O(n)