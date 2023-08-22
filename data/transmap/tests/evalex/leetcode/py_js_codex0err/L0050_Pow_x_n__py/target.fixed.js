function f_gold(x, n) {
    if (n == 0) {
        return 1;
    }
    if (n < 0) {
        return 1 / f_gold(x, -n);
    }
    var y = f_gold(x, n >> 1);
    return (n & 1) == 0 ? y * y : y * y * x;
}

