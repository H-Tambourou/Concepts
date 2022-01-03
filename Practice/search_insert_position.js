const searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length;
    while(start < end){
        let middle = Math.floor((start + end) /2);
        if(nums[middle] == target) return middle;
        else if(nums[middle] < target){
            start += 1;
        }else{
            end -=1;
        }
    }
    return start;
};