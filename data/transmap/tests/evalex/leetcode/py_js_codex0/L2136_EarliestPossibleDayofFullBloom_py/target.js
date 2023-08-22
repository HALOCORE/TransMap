function f_gold(plantTime, growTime) {
    var ans = t = 0;
    for (var _i = 0, _a = sorted(zip(plantTime, growTime), function (x) { return -x[1]; }); _i < _a.length; _i++) {
        var _b = _a[_i], a = _b[0], b = _b[1];
        t += a;
        ans = Math.max(ans, t + b);
    }
    return ans;
}

