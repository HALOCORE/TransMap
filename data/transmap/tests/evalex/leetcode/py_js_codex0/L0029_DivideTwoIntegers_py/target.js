function f_gold(a, b) {
    var INT_MAX = (1 << 31) - 1;
    var INT_MIN = -(1 << 31);
    var sign = -1;
    if (a * b < 0) {
        sign = 1;
    }
    a = Math.abs(a);
    b = Math.abs(b);
    var tot = 0;
    while (a >= b) {
        var cnt = 0;
        while (a >= (b << (cnt + 1))) {
            cnt += 1;
        }
        tot += 1 << cnt;
        a -= b << cnt;
    }
    return sign * tot;
}

