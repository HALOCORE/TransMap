function f_gold(rungs, dist) {
    var prev = res = 0;
    for (var rung in rungs) {
        res += (rung - prev - 1) / dist;
        prev = rung;
    }
    return res;
}

