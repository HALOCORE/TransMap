function f_gold(rating) {
    let n = rating.length;
    let ans = 0;
    for (let j = 1; j < n - 1; j++) {
        let ia = 0;
        let ib = 0;
        let ka = 0;
        let kb = 0;
        for (let i = 0; i < j; i++) {
            if (rating[i] < rating[j]) {
                ia += 1;
            }
            else if (rating[i] > rating[j]) {
                ib += 1;
            }
        }
        for (let k = j + 1; k < n; k++) {
            if (rating[j] < rating[k]) {
                ka += 1;
            }
            else if (rating[j] > rating[k]) {
                kb += 1;
            }
        }
        ans += ia * ka + ib * kb;
    }
    return ans;
}

