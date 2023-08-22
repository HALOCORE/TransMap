function f_gold(m, n, ops) {
    for (let a, b of ops) {
        m = Math.min(m, a);
        n = Math.min(n, b);
    }
    return m * n;
}

