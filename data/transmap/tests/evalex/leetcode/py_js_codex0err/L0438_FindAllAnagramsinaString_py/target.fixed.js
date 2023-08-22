function f_gold(s, p) {
    let counter = new Map();
    for (let i = 0; i < p.length; i++) {
        if (counter.has(p[i])) {
            counter.set(p[i], counter.get(p[i]) + 1);
        } else {
            counter.set(p[i], 1);
        }
    }
    let ans = [];
    let left = 0;
    let right = 0;
    let t = new Map();
    while (right < s.length) {
        if (t.has(s[right])) {
            t.set(s[right], t.get(s[right]) + 1);
        } else {
            t.set(s[right], 1);
        }
        while ((t.has(s[right]) ? t.get(s[right]) : 0) > (counter.has(s[right]) ? counter.get(s[right]) : 0)) {
            t.set(s[left], (t.has(s[left]) ? t.get(s[left]) : 0) - 1);
            left += 1;
        }
        if (right - left + 1 == p.length) {
            ans.push(left);
        }
        right += 1;
    }
    return ans;
}

