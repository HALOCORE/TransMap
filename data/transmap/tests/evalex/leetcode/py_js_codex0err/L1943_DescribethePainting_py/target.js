
function f_gold(segments) {
    var d = {};
    for (var i = 0; i < segments.length; i++) {
        d[segments[i][0]] += segments[i][2];
        d[segments[i][1]] -= segments[i][2];
    }
    var s = [];
    for (var key in d) {
        s.push([key, d[key]]);
    }
    s.sort(function (a, b) {
        return a[0] - b[0];
    });
    var n = s.length;
    for (var i = 1; i < n; i++) {
        s[i][1] += s[i - 1][1];
    }
    var res = [];
    for (var i = 0; i < n - 1; i++) {
        if (s[i][1]) {
            res.push([s[i][0], s[i + 1][0], s[i][1]]);
        }
    }
    return res;
}

