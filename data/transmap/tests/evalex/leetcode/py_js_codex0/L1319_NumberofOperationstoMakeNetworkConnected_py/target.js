
const f_gold = (n, connections) => {
    const find = x => {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    };
    let cnt = 0;
    let p = Array.from(Array(n).keys());
    for (let i = 0; i < connections.length; i++) {
        let a = connections[i][0];
        let b = connections[i][1];
        if (find(a) == find(b)) {
            cnt += 1;
        } else {
            p[find(a)] = find(b);
            n -= 1;
        }
    }
    return n - 1 > cnt ? -1 : n - 1;
};

