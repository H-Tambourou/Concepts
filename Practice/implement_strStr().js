const strStr = function(haystack, needle) {
    if(needle=="") return 0;
    
    if(haystack.includes(needle)){
        return haystack.indexOf(needle);
    }else{
        return -1
    }
};