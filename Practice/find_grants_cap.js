function findGrantsCap(grantsArray, newBudget) {
    const total = grantsArray.reduce(
      (prev, cur) => prev + cur, 0
    )
    const n = grantsArray.length;
    grantsArray.sort((a,b) => a - b).reverse();

    grantsArray.push(0);
    let surplus = total - newBudget;

    if (surplus <= 0){
        return grantsArray[0];
    }

    let i = 0;
    for (i; i < n; i++){
        surplus -= (i+1) * (grantsArray[i] - grantsArray[i+1]);
        if (surplus <= 0){
            break
        }
    }
 
    return grantsArray[i+1] + (-surplus / (i+1))
}
