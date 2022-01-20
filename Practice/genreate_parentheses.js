const generateParenthesis = function(n) {
    let res = [];
    const recurse = (str, open, close) => {
        if(open > close){
            return 
        }
        if(open===0 && close=== 0){
            res.push(str);
        }
        if(open > 0){
            recurse(`${str}(`, open - 1, close);
        }
        if(close > 0){
            recurse(`${str})`, open, close - 1)
        }
        
    }
    recurse('',n,n);
    return res;
};
//Recursion || Backtracking 