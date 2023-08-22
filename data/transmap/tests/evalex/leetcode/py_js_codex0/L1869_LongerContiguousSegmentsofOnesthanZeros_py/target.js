function f_gold(s) {
    var n0 = 0;
    var n1 = 0;
    var t0 = 0;
    var t1 = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '0') {
            t0 += 1;
            t1 = 0;
        }
        else {
            t0 = 0;
            t1 += 1;
        }
        n0 = Math.max(n0, t0);
        n1 = Math.max(n1, t1);
    }
    return n1 > n0;
}

