
function f_gold(isConnected) {
    function dfs(i) {
        vis[i] = true;
        for (var j = 0; j < n; j++) {
            if (!vis[j] && isConnected[i][j]) {
                dfs(j);
            }
        }
    }
    var n = isConnected.length;
    var vis = Array(n).fill(false);
    var ans = 0;
    for (var i = 0; i < n; i++) {
        if (!vis[i]) {
            dfs(i);
            ans++;
        }
    }
    return ans;
}

