function f_gold(costs) {
    var r, g, b;
    r = 0;
    g = 0;
    b = 0;
    for (var cost of costs) {
        var _r, _g, _b;
        _r = r;
        _g = g;
        _b = b;
        r = Math.min(_g, _b) + cost[0];
        g = Math.min(_r, _b) + cost[1];
        b = Math.min(_r, _g) + cost[2];
    }
    return Math.min(r, g, b);
}

