const lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let start = 0;
    let max = 0;
    
    for(let i =0; i < s.length; i++){
        if(map.has(s[i])){
            start = Math.max(start, map.get(s[i]) + 1);
        }
        max = Math.max(max, i - start  + 1);
        map.set(s[i], i);
    }
    return max;
};

// time complexity is O(N)
// space complexity is O(N)