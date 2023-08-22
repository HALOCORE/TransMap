
function f_gold (n, connections) {
    function dfs (u) {
        vis[u] = true;
        var ans = 0;
        for (var i = 0; i < g[u].length; i++) {
            if (!vis[g[u][i]]) {
                if (s.has(u + "," + g[u][i])) {
                    ans += 1;
                }
                ans += dfs(g[u][i]);
            }
        }
        return ans;
    }
    var g = {};
    var s = new Set();
    for (var i = 0; i < connections.length; i++) {
        if (!g[connections[i][0]]) {
            g[connections[i][0]] = [];
        }
        if (!g[connections[i][1]]) {
            g[connections[i][1]] = [];
        }
        g[connections[i][0]].push(connections[i][1]);
        g[connections[i][1]].push(connections[i][0]);
        s.add(connections[i][0] + "," + connections[i][1]);
    }
    var vis = [];
    for (var i = 0; i < n; i++) {
        vis.push(false);
    }
    return dfs(0);
}

