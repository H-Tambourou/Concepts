const findMin = function(nums) {
    let res = Math.min(...nums);
     return res;
   };
// time complexity O(1)
// Using binary search would make the algorithm O(log n)