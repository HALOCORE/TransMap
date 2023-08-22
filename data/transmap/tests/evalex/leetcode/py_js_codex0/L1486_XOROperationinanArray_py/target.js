function f_gold(n, start) {
    let res = 0;
    for (let i = 0; i < n; i++) {
        res ^= start + (i << 1);
    }
    return res;
}

