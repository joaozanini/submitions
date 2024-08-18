function breakingRecords(scores) {
    var countbest = 0
    var countlow = 0
    var best = scores[0]
    var low = scores[0]
    
    for(let i = 0; i < scores.length; i++) {
        if (scores[i] > best) {
            best = scores[i];
            countbest += 1
        } else if (scores[i] < low) {
            low = scores[i];
            countlow += 1
        };
    };
    return [countbest, countlow];
}