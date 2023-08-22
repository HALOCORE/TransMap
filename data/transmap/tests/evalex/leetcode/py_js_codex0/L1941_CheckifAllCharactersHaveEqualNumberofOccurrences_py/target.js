function f_gold(s) {
    let cnt = {};
    for (let i = 0; i < s.length; i++) {
        if (cnt[s[i]] === undefined) {
            cnt[s[i]] = 1;
        } else {
            cnt[s[i]] += 1;
        }
    }
    let values = Object.values(cnt);
    let set = new Set(values);
    return set.size === 1;
}

