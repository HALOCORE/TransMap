function f_gold(rungs, dist) {
    var prev = 0, res = 0;
    for (var rung in rungs) {
        res += Math.floor((rung - prev - 1) / dist);
        prev = rung;
    }
    return res;
}

