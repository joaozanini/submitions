function compareTriplets(a, b) {
    var alice = 0;
    var bob = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice +=1;
        } else if (b[i] > a[i]) {
            bob +=1;
        };
    }
    
    return [alice, bob]
};