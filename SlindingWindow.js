// Sliding Window

// used for finding subarrays/subsrting in an array/subsrting that satisfy given conditions
// -> subset of Dynamic Programming (solving program by dividing into sub problems)
// Time complexity - O(n) = linear time
// Space complexity - O(1) = constant space


// Given an arr of int, find max sum subarray of the required size
const maximumSubarray = function(arr, size){
  let maxSum = 0;
  let currentSum = 0;
  let maxStartIndex = 0;

  for(let i = 0; i < arr.length; i++) {
      currentSum +=arr[i];

      if(i < size){
          maxSum = currentSum;
      } else {
          currentSum -= arr[i - size];
          if(currentSum > maxSum) {
              maxSum = currentSum;
              maxStartIndex = i - size + 1
          }
      }
  }
  return arr.slice(maxStartIndex, maxStartIndex + size)

}

const output = maximumSubarray([-1, 2, 3, 10, -3, 9, 30], 3);
console.log(output)