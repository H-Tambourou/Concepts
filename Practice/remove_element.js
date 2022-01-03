const removeElement = function(nums, val) {
    let p1 = 0; 
    while(p1 < nums.length){
        if(nums[p1] == val){
            nums.splice(p1, 1);
        }else{
            p1 += 1;
        }
    }
    return nums.length;
};