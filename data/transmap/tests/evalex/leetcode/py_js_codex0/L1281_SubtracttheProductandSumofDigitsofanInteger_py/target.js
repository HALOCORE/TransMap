function f_gold(n) {
    var s = 0;
    var p = 1;
    while (n) {
        var t = n % 10;
        n = Math.floor(n / 10);
        s += t;
        p *= t;
    }
    return p - s;
}

