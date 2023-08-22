
function f_gold ( n, edges, hasApple ) {
    function dfs ( u, cost ) {
        if ( vis[u] ) return 0;
        vis[u] = true;
        var nxt_cost = 0;
        for ( var v of g[u] ) nxt_cost += dfs(v, 2);
        if ( !hasApple[u] && nxt_cost == 0 ) return 0;
        return cost + nxt_cost;
    }
    var g = {};
    for ( var i = 0; i < edges.length; i++ ) {
        var u = edges[i][0];
        var v = edges[i][1];
        if ( !g[u] ) g[u] = [];
        if ( !g[v] ) g[v] = [];
        g[u].push(v);
        g[v].push(u);
    }
    var vis = [];
    for ( var i = 0; i < n; i++ ) vis.push(false);
    return dfs(0, 0);
}

