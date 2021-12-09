const threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b);
    let n = nums.length;
    let minDiff = Infinity;
    let sum;

    for( let i = 0; i < n; i++){
      let L = i + 1;
      let R = n -1;
      while (L < R){
          let val = nums[i] + nums[L] + nums[R];
          let diff = Math.abs(target - val);

          if(diff < minDiff) {
              minDiff = diff;
              sum = val;
          } else{
              if(val < target) {
                  L++;
              } else{
                  R--
              }
          }
      }
    }
    return sum;
};

threeSumClosest([-1, 2, 1, -4], 1)//Output is 2 