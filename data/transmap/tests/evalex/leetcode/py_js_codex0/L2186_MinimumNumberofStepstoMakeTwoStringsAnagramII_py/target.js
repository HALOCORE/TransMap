function f_gold(s, t) {
    let cnt = {};
    for (let i = 0; i < s.length; i++) {
        if (cnt[s[i]] === undefined) {
            cnt[s[i]] = 1;
        } else {
            cnt[s[i]] += 1;
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (cnt[t[i]] === undefined) {
            cnt[t[i]] = -1;
        } else {
            cnt[t[i]] -= 1;
        }
    }
    let sum = 0;
    for (let key in cnt) {
        sum += Math.abs(cnt[key]);
    }
    return sum;
}

