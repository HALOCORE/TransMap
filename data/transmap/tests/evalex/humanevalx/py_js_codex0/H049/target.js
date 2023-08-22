function modp(n, p) {
    let ret = 1;
    for (let i = 0; i < n; i++) {
        ret = (2 * ret) % p;
    }
    return ret;
}

