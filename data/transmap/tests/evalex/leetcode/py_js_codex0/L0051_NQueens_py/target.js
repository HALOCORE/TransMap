function f_gold ( n ) {
    var res = [];
    var g = [];
    for ( var _i = 0; _i < n; _i++ ) {
        g.push([]);
        for ( var _j = 0; _j < n; _j++ ) {
            g[_i].push('.');
        }
    }
    var col = [];
    for ( var _i = 0; _i < n; _i++ ) {
        col.push(false);
    }
    var dg = [];
    for ( var _i = 0; _i < (2 * n); _i++ ) {
        dg.push(false);
    }
    var udg = [];
    for ( var _i = 0; _i < (2 * n); _i++ ) {
        udg.push(false);
    }
    function dfs ( u ) {
        if ( u == n ) {
            var temp = [];
            for ( var _i = 0; _i < g.length; _i++ ) {
                temp.push(g[_i].join(''));
            }
            res.push(temp);
            return;
        }
        for ( var i = 0; i < n; i++ ) {
            if ( !col[i] && !dg[u + i] && !udg[n - u + i] ) {
                g[u][i] = 'Q';
                col[i] = dg[u + i] = udg[n - u + i] = true;
                dfs(u + 1);
                g[u][i] = '.';
                col[i] = dg[u + i] = udg[n - u + i] = false;
            }
        }
    }
    dfs(0);
    return res;
}

