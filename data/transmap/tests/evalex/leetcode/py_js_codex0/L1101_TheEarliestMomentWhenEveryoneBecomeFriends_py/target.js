const f_gold = (logs, n) => {
    const find = (x) => {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    };
    let p = Array.from(Array(n).keys());
    logs.sort();
    for (let [t, a, b] of logs) {
        if (find(a) == find(b)) {
            continue;
        }
        p[find(a)] = find(b);
        n -= 1;
        if (n == 1) {
            return t;
        }
    }
    return -1;
};

