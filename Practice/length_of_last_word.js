const lengthOfLastWord = function(s) {
    const array = s.trim().split(' ');
    console.log(array);
    const l = array[array.length -1].length;
    return l;
};