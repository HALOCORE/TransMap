function f_gold(properties) {
    properties.sort(function (x, y) {
        if (x[0] == y[0]) {
            return x[1] - y[1];
        }
        else {
            return y[0] - x[0];
        }
    });
    var ans = 0;
    var mx = 0;
    for (var i = 0; i < properties.length; i++) {
        if (mx > properties[i][1]) {
            ans++;
        }
        mx = Math.max(mx, properties[i][1]);
    }
    return ans;
}

