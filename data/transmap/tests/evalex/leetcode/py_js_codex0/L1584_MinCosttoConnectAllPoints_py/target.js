
function f_gold(points) {
    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    var g = [];
    var n = points.length;
    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {
            var x1 = points[i][0];
            var y1 = points[i][1];
            var x2 = points[j][0];
            var y2 = points[j][1];
            g.push([Math.abs(x1 - x2) + Math.abs(y1 - y2), i, j]);
        }
    }
    g.sort(function (a, b) {
        return a[0] - b[0];
    });
    var p = [];
    for (var i = 0; i < n; i++) {
        p.push(i);
    }
    var ans = 0;
    for (var i = 0; i < g.length; i++) {
        var cost = g[i][0];
        var x = g[i][1];
        var y = g[i][2];
        if (find(x) == find(y)) {
            continue;
        }
        p[find(x)] = find(y);
        n -= 1;
        ans += cost;
        if (n == 1) {
            return ans;
        }
    }
    return 0;
}

