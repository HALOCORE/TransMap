function f_gold(values) {
    var res = 0;
    var mx = values[0];
    for (var i = 1; i < values.length; i++) {
        res = Math.max(res, values[i] - i + mx);
        mx = Math.max(mx, values[i] + i);
    }
    return res;
}

