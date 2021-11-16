const x = 150;

function convertToRoman(num){
    const obj = {
        'M':1000,
        'CM':900,
        'D':500,
        'CD':400,
        'C':100,
        'XC':90,
        'L':50,
        'XL':40,
        'X':10,
        'IX':9,
        'V':5,
        'IV':4,
        'I':1
    };
    let result="";
    for(symbol in obj) {
        let val = obj[symbol];
        while(val <= num){
            num -= val;
            result += symbol;
        }
    
    };
    return result;
}// convertToRoman(x) -> "CL"