function f_gold(lights) {
    var d = {};
    for (var _i = 0, lights_1 = lights; _i < lights_1.length; _i++) {
        var _a = lights_1[_i], p = _a[0], r = _a[1];
        d[p - r] = (d[p - r] || 0) + 1;
        d[p + r + 1] = (d[p + r + 1] || 0) - 1;
    }
    var s = 0;
    var mx = 0;
    var ans = 0;
    for (var _b = 0, _c = Object.keys(d).sort(); _b < _c.length; _b++) {
        var k = _c[_b];
        s += d[k];
        if (s > mx) {
            mx = s;
            ans = k;
        }
    }
    return ans;
}

