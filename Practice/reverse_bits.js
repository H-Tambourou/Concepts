const reverseBits = function(n) {
    let res = [...n.toString(2)];
    const len = res.length;
    for(let i = 1; i <= (32 - len); i++){
        res.unshift('0');
    }
    res.reverse();
    return parseInt(res.join(''), 2);
};