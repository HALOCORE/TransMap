function f_gold(words1, words2) {
    let cnt1 = {};
    let cnt2 = {};
    for (let i = 0; i < words1.length; i++) {
        if (cnt1[words1[i]] === undefined) {
            cnt1[words1[i]] = 1;
        } else {
            cnt1[words1[i]] += 1;
        }
    }
    for (let i = 0; i < words2.length; i++) {
        if (cnt2[words2[i]] === undefined) {
            cnt2[words2[i]] = 1;
        } else {
            cnt2[words2[i]] += 1;
        }
    }
    let sum = 0;
    for (let k in cnt1) {
        if (cnt1[k] === 1) {
            if (cnt2[k] === 1) {
                sum += 1;
            }
        }
    }
    return sum;
}

