function f_gold(gain) {
    var t = 0;
    var res = t;
    for (var h of gain) {
        t += h;
        res = Math.max(res, t);
    }
    return res;
}

