function kangaroo(x1, v1, x2, v2) {
    // Check if one kangaroo is ahead and jumping further per jump
    if (v1 === v2) {
        // If they jump the same distance but started at different positions, they will never meet
        return x1 === x2 ? 'YES' : 'NO';
    } else {
        // Check if their difference in starting positions is divisible by their relative velocities
        if ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) >= 0) {
            return 'YES';
        } else {
            return 'NO';
        }
    }
}
