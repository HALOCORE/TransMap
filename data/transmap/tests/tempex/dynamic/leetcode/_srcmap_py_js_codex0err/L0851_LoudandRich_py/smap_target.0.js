
function f_gold (richer, quiet) {
    var n = quiet.length;
    var g = {};
    for (var i = 0; i < richer.length; i++) {
        var a = richer[i][0];
        var b = richer[i][1];
        if (g[b] == undefined) {
            g[b] = [];
        }
        g[b].push(a);
    }
    var ans = new Array(n).fill(-1);
    function dfs (i) {
        if (ans[i] != -1) {
            return;
        }
        ans[i] = i;
        for (var j = 0; j < g[i].length; j++) {
            dfs(g[i][j]);
            if (quiet[ans[g[i][j]]] < quiet[ans[i]]) {
                ans[i] = ans[g[i][j]];
            }
        }
    }
    for (var i = 0; i < n; i++) {
        dfs(i);
    }
    return ans;
}

