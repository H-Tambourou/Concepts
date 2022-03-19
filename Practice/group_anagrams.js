const groupAnagrams = function(strs) {
    const sortStrings = strs.map((str) => str.split('').sort().join(''));
    
    const resObj = sortStrings.reduce((prev, curr, index) => {
    if(prev[curr]) {
        prev[curr] = [...prev[curr], strs[index]];
    } 
    else prev[curr] = [strs[index]];                              
    return prev;
    }, {});
    return Object.values(resObj)

};

// time complexity is O(n)
// space complexity is O(n)