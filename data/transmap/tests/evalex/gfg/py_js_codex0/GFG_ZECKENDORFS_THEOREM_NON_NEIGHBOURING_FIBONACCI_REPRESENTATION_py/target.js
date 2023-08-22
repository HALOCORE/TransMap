function f_gold(n) {
    if (n == 0 || n == 1)
        return n;
    var f1 = 0;
    var f2 = 1;
    var f3 = 1;
    while (f3 <= n) {
        f1 = f2;
        f2 = f3;
        f3 = f1 + f2;
    }
    return f2;
}

