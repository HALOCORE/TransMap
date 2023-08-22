function f_gold(s) {
    let counter = new Map();
    for (let i = 0; i < s.length; i++) {
        if (counter.has(s[i])) {
            counter.set(s[i], counter.get(s[i]) + 1);
        } else {
            counter.set(s[i], 1);
        }
    }
    let buckets = new Map();
    for (let [key, value] of counter) {
        if (buckets.has(value)) {
            buckets.get(value).push(key);
        } else {
            buckets.set(value, [key]);
        }
    }
    let res = [];
    for (let i = s.length; i >= 0; i--) {
        if (buckets.has(i)) {
            for (let j = 0; j < buckets.get(i).length; j++) {
                res.push(buckets.get(i)[j].repeat(i));
            }
        }
    }
    return res.join('');
}

