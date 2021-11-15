let arr1= [1,2,3,4];
let arr2=[1,2,3,4];

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