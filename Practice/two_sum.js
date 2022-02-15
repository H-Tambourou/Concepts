// solved using a hashmap
const twoSum = function(nums, target) {
    let map = new Map();
    
    for(const [i, num] of nums.entries()){
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]), i]
        }
        map.set(num, i);
    }
};