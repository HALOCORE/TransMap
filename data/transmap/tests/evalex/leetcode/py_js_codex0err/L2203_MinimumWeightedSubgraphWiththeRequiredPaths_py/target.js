
function f_gold(n, edges, src1, src2, dest) {
    function dijkstra(g, u) {
        var dist = new Array(n).fill(Infinity);
        dist[u] = 0;
        var q = [[0, u]];
        while (q.length > 0) {
            var d = q[0][0];
            var u = q[0][1];
            q.shift();
            if (d > dist[u]) continue;
            for (var i = 0; i < g[u].length; i++) {
                var v = g[u][i][0];
                var w = g[u][i][1];
                if (dist[v] > dist[u] + w) {
                    dist[v] = dist[u] + w;
                    q.push([dist[v], v]);
                }
            }
        }
        return dist;
    }
    var g = new Array(n).fill([]);
    var rg = new Array(n).fill([]);
    for (var i = 0; i < edges.length; i++) {
        var f = edges[i][0];
        var t = edges[i][1];
        var w = edges[i][2];
        g[f].push([t, w]);
        rg[t].push([f, w]);
    }
    var d1 = dijkstra(g, src1);
    var d2 = dijkstra(g, src2);
    var d3 = dijkstra(rg, dest);
    var ans = Infinity;
    for (var i = 0; i < n; i++) {
        ans = Math.min(ans, d1[i] + d2[i] + d3[i]);
    }
    return ans >= Infinity ? -1 : ans;
}

