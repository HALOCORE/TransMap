
function f_gold(n, headID, manager, informTime) {
    function dfs(i) {
        var ans = 0;
        for (var j = 0; j < g[i].length; j++) {
            ans = Math.max(ans, informTime[i] + dfs(g[i][j]));
        }
        return ans;
    }
    var g = [];
    for (var i = 0; i < n; i++) {
        g.push([]);
    }
    for (var i = 0; i < n; i++) {
        g[manager[i]].push(i);
    }
    return dfs(headID);
}

