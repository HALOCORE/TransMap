
function f_gold(n, edges, succProb, start, end) {
    var g = new Map();
    for (var i = 0; i < edges.length; i++) {
        var a = edges[i][0];
        var b = edges[i][1];
        var s = succProb[i];
        if (g.has(a)) {
            var temp = g.get(a);
            temp.push([b, s]);
            g.set(a, temp);
        }
        else {
            g.set(a, [[b, s]]);
        }
        if (g.has(b)) {
            var temp = g.get(b);
            temp.push([a, s]);
            g.set(b, temp);
        }
        else {
            g.set(b, [[a, s]]);
        }
    }
    var q = [[-1, start]];
    var d = new Array(n);
    d[start] = 1;
    while (q.length > 0) {
        var w = q[0][0];
        var u = q[0][1];
        q.shift();
        w = -w;
        if (d[u] > w) {
            continue;
        }
        var temp = g.get(u);
        for (var i = 0; i < temp.length; i++) {
            var v = temp[i][0];
            var t = temp[i][1];
            if (d[v] < d[u] * t) {
                d[v] = d[u] * t;
                q.push([-d[v], v]);
            }
        }
    }
    return d[end];
}

