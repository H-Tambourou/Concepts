const height = [1, 7, 4, 6, 9, 8, 7];

function maxArea(in1){
    let leftBound = 0;
    let rightBound = in1.length - 1;
    let max = 0;
    while(leftBound < rightBound){
        if(in1[leftBound] < in1[rightBound]){
            max = Math.max(max, (rightBound - leftBound)*in1[leftBound]);
            leftBound++
        }
        else{
            max = Math.max(max, (rightBound - leftBound)*in1[rightBound]);
            rightBound--;
        }
    }
    return max; 
}
//maxArea(height) -> 35
// Time complexity is O(n)
// Space complexity is O(1)     