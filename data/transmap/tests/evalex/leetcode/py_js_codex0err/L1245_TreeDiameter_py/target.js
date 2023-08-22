
function f_gold ( edges ) {
    function dfs ( u, t ) {
        if ( vis[u] ) return;
        vis[u] = true;
        for ( let v of d[u] ) {
            dfs(v, t + 1);
        }
        if ( ans < t ) {
            ans = t;
            next = u;
        }
    }
    let d = new Map();
    let vis = new Array(edges.length + 1).fill(false);
    for ( let i = 0; i < edges.length; i++ ) {
        let u = edges[i][0];
        let v = edges[i][1];
        if ( d.has(u) ) {
            d.get(u).add(v);
        } else {
            d.set(u, new Set([v]));
        }
        if ( d.has(v) ) {
            d.get(v).add(u);
        } else {
            d.set(v, new Set([u]));
        }
    }
    let ans = 0;
    let next = 0;
    dfs(edges[0][0], 0);
    vis = new Array(edges.length + 1).fill(false);
    dfs(next, 0);
    return ans;
}

