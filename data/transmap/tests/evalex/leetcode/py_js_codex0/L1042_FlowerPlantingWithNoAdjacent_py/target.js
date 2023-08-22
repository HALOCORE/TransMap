
function f_gold(n, paths) {
    var g = new Map();
    for (var i = 0; i < paths.length; i++) {
        var x = paths[i][0] - 1;
        var y = paths[i][1] - 1;
        if (g.has(x)) {
            g.get(x).push(y);
        } else {
            g.set(x, [y]);
        }
        if (g.has(y)) {
            g.get(y).push(x);
        } else {
            g.set(y, [x]);
        }
    }
    var ans = new Array(n);
    for (var u = 0; u < n; u++) {
        var colors = new Set();
        for (var v of g.get(u)) {
            colors.add(ans[v]);
        }
        for (var c = 1; c < 5; c++) {
            if (!colors.has(c)) {
                ans[u] = c;
                break;
            }
        }
    }
    return ans;
}

