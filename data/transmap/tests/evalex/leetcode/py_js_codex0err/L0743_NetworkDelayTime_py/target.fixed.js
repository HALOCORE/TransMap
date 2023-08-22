function f_gold(times, n, k) {
    var INF = 0x3F3F;
    var g = new Map();
    for (var i = 0; i < times.length; i++) {
        var u = times[i][0] - 1;
        var v = times[i][1] - 1;
        var w = times[i][2];
        if (g.has(u)) {
            g.get(u).push([v, w]);
        }
        else {
            g.set(u, [[v, w]]);
        }
    }
    var dist = new Array(n).fill(INF);
    dist[k - 1] = 0;
    var q = [[0, k - 1]];
    while (q.length > 0) {
        var _ = q.shift();
        var u = _[1];
        for (var i = 0; i < g.get(u)?.length; i++) {
            var v = g.get(u)[i][0];
            var w = g.get(u)[i][1];
            if (dist[v] > dist[u] + w) {
                dist[v] = dist[u] + w;
                q.push([dist[v], v]);
            }
        }
    }
    var ans = Math.max(...dist);
    return (ans == INF) ? -1 : ans;
}

