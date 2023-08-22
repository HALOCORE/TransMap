const f_gold = (s, target) => {
    let cnt = new Map();
    let cnt2 = new Map();
    let ans = Number.POSITIVE_INFINITY;
    for (let i = 0; i < s.length; i++) {
        if (cnt.has(s[i])) {
            cnt.set(s[i], cnt.get(s[i]) + 1);
        } else {
            cnt.set(s[i], 1);
        }
    }
    for (let i = 0; i < target.length; i++) {
        if (cnt2.has(target[i])) {
            cnt2.set(target[i], cnt2.get(target[i]) + 1);
        } else {
            cnt2.set(target[i], 1);
        }
    }
    for (let [key, value] of cnt2) {
        if (cnt.get(key) < value) {
            return 0;
        }
        ans = Math.min(ans, Math.floor(cnt.get(key) / value));
    }
    return ans;
}

