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
    for (var [k, v] of Object.entries(d).sort((a, b) => (parseInt(a[0]) - parseInt(b[0])))) {
        //
        s += v;
        if (s > mx) {
            mx = s;
            ans = parseInt(k);
        }
    }
    return ans;
}

