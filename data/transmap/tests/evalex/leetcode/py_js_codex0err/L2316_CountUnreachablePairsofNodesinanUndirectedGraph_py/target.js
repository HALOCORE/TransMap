
function f_gold (n, edges) {
    function dfs (i) {
        vis[i] = true;
        var res = 1;
        for (var j = 0; j < g[i].length; j++) {
            if (!vis[g[i][j]]) {
                res += dfs(g[i][j]);
            }
        }
        return res;
    }
    var g = {};
    for (var i = 0; i < edges.length; i++) {
        if (!g[edges[i][0]]) {
            g[edges[i][0]] = [];
        }
        if (!g[edges[i][1]]) {
            g[edges[i][1]] = [];
        }
        g[edges[i][0]].push(edges[i][1]);
        g[edges[i][1]].push(edges[i][0]);
    }
    var vis = [];
    for (var i = 0; i < n; i++) {
        vis.push(false);
    }
    var arr = [];
    for (var i = 0; i < n; i++) {
        if (!vis[i]) {
            arr.push(dfs(i));
        }
    }
    var ans = 0;
    var t = 0;
    for (var i = 0; i < arr.length; i++) {
        t += arr[i];
        ans += arr[i] * (n - t);
    }
    return ans;
}

