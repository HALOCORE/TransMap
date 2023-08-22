function f_gold(n) {
    var a, b, c;
    a = 0;
    b = 1;
    c = 1;
    for (var _ = 0; _ < n; _++) {
        a = b;
        b = c;
        c = a + b + c;
    }
    return a;
}

