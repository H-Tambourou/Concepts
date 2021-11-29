const isValid = function(s) {
    const arr = [];
    if(s.length == 1 || s.length == 0 || !s.length) return false
    
    for(let char of s){
        if(['(','{','['].includes(char)){
            arr.push(char);
        }
        else{
            const pair = arr.pop() + char;
            console.log(pair);
            if(!['()','{}','[]'].includes(pair)){
                return false;
            }
        }   
    }
    return arr.length == 0;

};//isValid("()") => true