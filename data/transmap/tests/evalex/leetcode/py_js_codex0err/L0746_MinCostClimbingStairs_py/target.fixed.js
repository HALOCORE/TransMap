function f_gold(cost) {
    var a = 0;
    var b = 0;
    for (var i = 1; i < cost.length; i++) {
        [a, b] = [b, Math.min(a + cost[i - 1], b + cost[i])];
    }
    return b;
}

