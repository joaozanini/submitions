function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var countApples = 0;
    var countOranges = 0;

    for (let i = 0; i < apples.length; i++) {
        if ((apples[i] + a) >= s && (apples[i] + a) <= t) {
            countApples += 1;
        }
    }

    for (let i = 0; i < oranges.length; i++) {
        if ((oranges[i] + b) >= s && (oranges[i] + b) <= t) {
            countOranges += 1;
        }
    }

    console.log(countApples);
    console.log(countOranges);
}
