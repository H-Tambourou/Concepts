const array = [4,3,2,7,8,2,3,1];

const findDisappearedNumbers = function(nums) {
    let result =[];
    for( let i=1; i<= nums.length; i++){
        if(!nums.find(num => num == i) ){
            result.push(i);
        }
    }
    return result;
};

//findDisappearedNumbers(array) -> [5, 6]