
const f_gold = (n, connections) => {
    const find = x => {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    };
    connections.sort((a, b) => a[2] - b[2]);
    let p = Array.from(Array(n).keys());
    let ans = 0;
    for (let [x, y, cost] of connections) {
        x--;
        y--;
        if (find(x) == find(y)) {
            continue;
        }
        p[find(x)] = find(y);
        ans += cost;
        n--;
        if (n == 1) {
            return ans;
        }
    }
    return -1;
};

