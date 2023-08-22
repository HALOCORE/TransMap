function f_gold(word1, word2) {
    let counter = {};
    for (let c of word1) {
        if (counter[c] === undefined) {
            counter[c] = 1;
        } else {
            counter[c] += 1;
        }
    }
    for (let c of word2) {
        if (counter[c] === undefined) {
            counter[c] = -1;
        } else {
            counter[c] -= 1;
        }
    }
    for (let x of Object.values(counter)) {
        if (Math.abs(x) > 3) {
            return false;
        }
    }
    return true;
}

