function f_gold(sticks) {
    var h = [];
    for (var s in sticks) {
        heappush(h, s);
    }
    var res = 0;
    while (h.length > 1) {
        var val = heappop(h) + heappop(h);
        res += val;
        heappush(h, val);
    }
    return res;
}

