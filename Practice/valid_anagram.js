const sortStr = function(str) {
    return str.split("").sort().join("");
}
const isAnagram = function(s, t) {
    let a = sortStr(s)
    let b = sortStr(t);
    
   return a === b
};
