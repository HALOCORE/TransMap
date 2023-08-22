
function f_gold(graph) {
    let n = graph.length;
    let dst = -1 ^ (-1 << n);
    let q = [];
    let vis = [];
    for (let i = 0; i < n; i++) {
        q.push([i, 1 << i, 0]);
        vis[i] = [];
        vis[i][1 << i] = true;
    }
    while (q.length > 0) {
        let u = q[0][0];
        let state = q[0][1];
        let dis = q[0][2];
        q.shift();
        for (let v = 0; v < graph[u].length; v++) {
            let nxt = state | (1 << graph[u][v]);
            if (nxt == dst) {
                return dis + 1;
            }
            if (!vis[graph[u][v]][nxt]) {
                q.push([graph[u][v], nxt, dis + 1]);
                vis[graph[u][v]][nxt] = true;
            }
        }
    }
    return 0;
}

