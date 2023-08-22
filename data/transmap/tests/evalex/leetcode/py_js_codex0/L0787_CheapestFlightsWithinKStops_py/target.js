
function f_gold(n, flights, src, dst, k) {
    var INF = 0x3F3F3F3F;
    var dist = new Array(n).fill(INF);
    dist[src] = 0;
    for (var _ = 0; _ < k + 1; _++) {
        var backup = dist.slice();
        for (var i = 0; i < flights.length; i++) {
            var f = flights[i][0];
            var t = flights[i][1];
            var p = flights[i][2];
            dist[t] = Math.min(dist[t], backup[f] + p);
        }
    }
    return dist[dst] == INF ? -1 : dist[dst];
}

