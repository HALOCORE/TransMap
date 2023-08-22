
function f_gold(edges, patience) {
    var g = new Map();
    for (var i = 0; i < edges.length; i++) {
        var u = edges[i][0];
        var v = edges[i][1];
        if (g.has(u)) {
            g.get(u).push(v);
        } else {
            g.set(u, [v]);
        }
        if (g.has(v)) {
            g.get(v).push(u);
        } else {
            g.set(v, [u]);
        }
    }
    var q = [0];
    var vis = new Set();
    vis.add(0);
    var ans = 0;
    var step = 0;
    while (q.length > 0) {
        step += 1;
        for (var i = 0; i < q.length; i++) {
            var u = q.shift();
            for (var j = 0; j < g.get(u).length; j++) {
                var v = g.get(u)[j];
                if (vis.has(v)) {
                    continue;
                }
                vis.add(v);
                q.push(v);
                var d = step * 2;
                var t = patience[v];
                ans = Math.max(ans, Math.floor((d - 1) / t) * t + d + 1);
            }
        }
    }
    return ans;
}

