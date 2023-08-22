function f_gold(gain) {
    var res = t = 0;
    for (var h of gain) {
        t += h;
        res = Math.max(res, t);
    }
    return res;
}

