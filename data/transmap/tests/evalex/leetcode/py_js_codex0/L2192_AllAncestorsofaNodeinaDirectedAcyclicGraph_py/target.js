
function f_gold(n, edges) {
    var g = new Map();
    for (var i = 0; i < edges.length; i++) {
        if (g.has(edges[i][1])) {
            g.get(edges[i][1]).push(edges[i][0]);
        } else {
            g.set(edges[i][1], [edges[i][0]]);
        }
    }
    var ans = [];
    for (var i = 0; i < n; i++) {
        if (g.get(i) == null) {
            ans.push([]);
            continue;
        }
        var q = [i];
        var vis = new Array(n).fill(false);
        vis[i] = true;
        var t = [];
        while (q.length > 0) {
            for (var j = 0; j < q.length; j++) {
                var v = q.shift();
                for (var u of g.get(v)) {
                    if (!vis[u]) {
                        vis[u] = true;
                        q.push(u);
                        t.push(u);
                    }
                }
            }
        }
        ans.push(t.sort());
    }
    return ans;
}

