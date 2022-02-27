const hammingWeight = function(n) {
    const arr = n.toString(2).split('');
    console.log(arr)
    let count = 0
    for(let i= 0; i < arr.length; i++){
        if(arr[i] == 1) {
            count +=1;
        }
    }
    return count 
};