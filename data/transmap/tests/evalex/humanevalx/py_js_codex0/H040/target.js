function triples_sum_to_zero(l) {
    for (let i = 0; i < l.length; i++) {
        for (let j = i + 1; j < l.length; j++) {
            for (let k = j + 1; k < l.length; k++) {
                if (l[i] + l[j] + l[k] == 0) {
                    return true;
                }
            }
        }
    }
    return false;
}

