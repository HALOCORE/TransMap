function f_gold(n) {
    var a1, an;
    a1 = 1;
    an = n;
    var i, step, cnt;
    i = 0;
    step = 1;
    cnt = n;
    while (cnt > 1) {
        if (i % 2) {
            an -= step;
            if (cnt % 2) {
                a1 += step;
            }
        }
        else {
            a1 += step;
            if (cnt % 2) {
                an -= step;
            }
        }
        cnt >>= 1;
        step <<= 1;
        i += 1;
    }
    return a1;
}

