const letterCombinations = function(digits) {
    if(digits.length < 1){
        return []
    };
    const map = {
        2:"abc",
        3:"def",
        4:"ghi",
        5:"jkl",
        6:"mno",
        7:"pqrs",
        8:"tuv",
        9:"wxyz"
    };
    const res = [];
    const recurse = (index, str) => {
        if(index === digits.length){
            res.push(str);
            return;
        }
        for(const s of map[digits[index]]){
            recurse(index + 1, str + s)
        }
    }
    recurse(0, '')
    return res
};