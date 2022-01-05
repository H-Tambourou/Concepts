var mySqrt = function(x) {
    let left = 0;
    let right = x;
    let middle;
    while(left <= right){
        middle = Math.floor((left + right)/ 2);
        if(middle**2 == x){
            return middle;
        }else if(middle**2 > x){
               right = middle - 1;
        }else{
            left = middle + 1;
        }
    }return right;
};