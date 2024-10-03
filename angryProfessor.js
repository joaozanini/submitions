function angryProfessor(k, a) {
    var onTime = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            onTime += 1;
        };
    };
    
    if (onTime >= k) {
        return 'NO'
    } if (onTime < k) {
        return 'YES'
    };
}