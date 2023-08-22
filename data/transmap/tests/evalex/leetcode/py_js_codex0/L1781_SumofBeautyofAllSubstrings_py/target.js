const f_gold = (s) => {
    let ans = 0;
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let counter = {};
        for (let j = i; j < n; j++) {
            if (counter[s[j]] === undefined) {
                counter[s[j]] = 1;
            } else {
                counter[s[j]] += 1;
            }
            let t = Object.values(counter).filter(v => v);
            ans += Math.max(...t) - Math.min(...t);
        }
    }
    return ans;
}

