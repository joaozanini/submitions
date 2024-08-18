function birthdayCakeCandles(candles) {
    let maxCandleHeight = Math.max(...candles);
    let count = 0;
    
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === maxCandleHeight) {
            count++;
        }
    }

    return count;
}