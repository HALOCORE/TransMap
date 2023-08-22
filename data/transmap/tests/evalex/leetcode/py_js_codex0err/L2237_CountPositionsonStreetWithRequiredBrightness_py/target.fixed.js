
const f_gold = (n, lights, requirement) => {
    let d = Array(100010).fill(0);
    for (let [p, r] of lights) {
        let i = Math.max(0, p - r);
        let j = Math.min(n - 1, p + r);
        d[i] += 1;
        d[j + 1] -= 1;
    }
    return d.map((sum => v => sum += v)(0)).map((v, i) => v >= requirement[i]).reduce((a, b) => a + b);
};

