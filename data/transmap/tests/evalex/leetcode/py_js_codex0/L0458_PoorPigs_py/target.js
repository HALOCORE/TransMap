function f_gold(buckets, minutesToDie, minutesToTest) {
    var base = Math.floor(minutesToTest / minutesToDie) + 1;
    var res = 0;
    var p = 1;
    while (p < buckets) {
        p *= base;
        res += 1;
    }
    return res;
}

