const representation = (n) => {
    let res = "";
    const recurse = function recurse(num) {
        if(num == n +1) {
            return res;
        }
        if((num % 3 == 0) && (num % 5 == 0)){
            res +="fizzbuzz";
        }else if(num % 5 == 0){
            res +="buzz";
        }else if(num % 3 == 0){
            res +="fizz";
        }else {
            res += num;
        }
        recurse(num + 1)
    }  
    recurse(1);
    return res;
    
}

console.log(representation(15))

//answer should be '12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz'.
