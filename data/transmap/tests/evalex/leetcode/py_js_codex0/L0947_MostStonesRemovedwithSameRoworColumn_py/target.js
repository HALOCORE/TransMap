const find = (x) => {
    if (p[x] != x) {
        p[x] = find(p[x]);
    }
    return p[x];
};
const removeStones = (stones) => {
    const n = 10010;
    const p = Array.from(Array(n << 1).keys());
    for (let [x, y] of stones) {
        p[find(x)] = find(y + n);
    }
    const s = new Set();
    for (let [x, _] of stones) {
        s.add(find(x));
    }
    return stones.length - s.size;
};

