
function f_gold(n, edges, time, change) {
    var g = new Map();
    for (var i = 0; i < edges.length; i++) {
        var u = edges[i][0];
        var v = edges[i][1];
        if (g.has(u)) {
            g.get(u).add(v);
        } else {
            g.set(u, new Set([v]));
        }
        if (g.has(v)) {
            g.get(v).add(u);
        } else {
            g.set(v, new Set([u]));
        }
    }
    var q = new Array();
    q.push([1, 0]);
    var dist = new Array(n + 1);
    for (var i = 0; i < n + 1; i++) {
        dist[i] = new Array(2);
        dist[i][0] = Number.POSITIVE_INFINITY;
        dist[i][1] = Number.POSITIVE_INFINITY;
    }
    dist[1][1] = 0;
    while (q.length > 0) {
        var u = q[0][0];
        var d = q[0][1];
        q.shift();
        for (var v of g.get(u)) {
            if (d + 1 < dist[v][0]) {
                dist[v][0] = d + 1;
                q.push([v, d + 1]);
            } else if (dist[v][0] < d + 1 && d + 1 < dist[v][1]) {
                dist[v][1] = d + 1;
                if (v == n) {
                    break;
                }
                q.push([v, d + 1]);
            }
        }
    }
    var ans = 0;
    for (var i = 0; i < dist[n][1]; i++) {
        ans += time;
        if (i < dist[n][1] - 1 && Math.floor(ans / change) % 2 == 1) {
            ans = Math.floor((ans +