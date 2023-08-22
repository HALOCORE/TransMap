function count_nums(arr) {
    function digits_sum(n) {
        let neg = 1;
        if (n < 0) { n = -1 * n, neg = -1; }
        n = [...String(n)].map(Number);
        n[0] = n[0] * neg;
        return n.reduce((a, b) => a + b);
    }
    return arr.map(digits_sum).filter(x => x > 0).length;
}

