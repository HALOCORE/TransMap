function f_gold(n) {
    var a = 0;
    var b = 1;
    for (var _ = 0; _ < n; _++) {
        var temp = a;
        a = b;
        b = temp + b;
    }
    return a;
}

