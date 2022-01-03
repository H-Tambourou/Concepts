//BinarySearch (Divide & Conquer)
// - O(log N)

let x = 70; 
const arr = [1, 5, 6, 9, 15, 20, 35, 34, 50, 70, 89, 90, 99, 100, 101];

function binarySearch(num, array){
    let start =0;
    let end = array.length -1;
    
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (array[middle] === num) {
            // found the key
            return "the number was found";
        } else if (array[middle] < num) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return -1
}
