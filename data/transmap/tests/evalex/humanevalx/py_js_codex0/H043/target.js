function pairs_sum_to_zero(l) {
    for (let i = 0; i < l.length; i++) {
        for (let j = i + 1; j < l.length; j++) {
            if (l[i] + l[j] === 0) {
                return true;
            }
        }
    }
    return false;
}

