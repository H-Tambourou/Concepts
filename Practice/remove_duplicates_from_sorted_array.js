const removeDuplicates = function(nums) {
    let pointer1 = 0;
    let pointer2 = 1; 
    while(pointer2 < nums.length){
        if(nums[pointer1] === nums[pointer2]){
            nums.splice(pointer2, 1);
        }else {
            pointer1= pointer2;
            pointer2 += 1;
        }
    }
    return nums.length;
};
//Time complexity is O(N)
//Space complexity is O(1)
