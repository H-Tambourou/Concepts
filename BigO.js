let arr1= [1,2,3,4];
let arr2=[1,2,3,4];
let match= 3;

function printPairs(arr1, arr2){
    for(let i=0; i < arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            console.log(arr1[i] + ',' + arr2[j]);
        }
    }
} //Runtime is O(ab)

function printPairs(arr1){
    for(let i=0; i < arr1.length; i++){
        for(let j=0; j<arr1.length; j++){
            console.log(arr1[i]);
        }
    }
} //Runtime is O(N^2)


function findIndex(arr1, match){
    for(let i =0; i < arr1.length; i++){
        if(arr1[i] == match) {return i};
        return -1;
    }
}// Runtime is O(N)

const quickSort = list => {
  if (list.length < 2) 
    return list;
  let pivot = list[0];
  let left  = []; 
  let right = [];
  for (let i = 1, total = list.length; i < total; i++){
    if (list[i] < pivot)
      left.push(list[i]);
    else
      right.push(list[i]);
  }
  return [
    ...quickSort(left), 
    pivot, 
    ...quickSort(right)
  ];
}; // Best case is O(N log N), Worst case O(N^2)