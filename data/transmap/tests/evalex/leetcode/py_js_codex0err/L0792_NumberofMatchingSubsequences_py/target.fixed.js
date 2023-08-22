function f_gold(s, words) {
    let buckets = {};
    for (let word of words) {
        if (buckets[word[0]] === undefined) {
            buckets[word[0]] = [];
        }
        buckets[word[0]].push(word);
    }
    let res = 0;
    for (let c of s) {
        let old = buckets[c] ? buckets[c].slice() : [];
        buckets[c] = [];
        for (let t of old) {
            if (t.length == 1) {
                res += 1;
            }
            else {
                if (buckets[t[1]] === undefined) {
                    buckets[t[1]] = [];
                }
                buckets[t[1]].push(t.slice(1));
            }
        }
    }
    return res;
}

