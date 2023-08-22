
const f_gold = (n, roads) => {
    const INF = Number.MAX_VALUE;
    const MOD = 10 ** 9 + 7;
    let g = [];
    for (let i = 0; i < n; i++) {
        g.push([]);
        for (let j = 0; j < n; j++) {
            g[i].push(INF);
        }
    }
    for (let i = 0; i < roads.length; i++) {
        let u = roads[i][0];
        let v = roads[i][1];
        let t = roads[i][2];
        g[u][v] = t;
        g[v][u] = t;
    }
    g[0][0] = 0;
    let dist = [];
    let w = [];
    for (let i = 0; i < n; i++) {
        dist.push(INF);
        w.push(0);
    }
    dist[0] = 0;
    w[0] = 1;
    let vis = [];
    for (let i = 0; i < n; i++) {
        vis.push(false);
    }
    for (let i = 0; i < n; i++) {
        let t = -1;
        for (let j = 0; j < n; j++) {
            if (!vis[j] && (t == -1 || dist[j] < dist[t])) {
                t = j;
            }
        }
        vis[t] = true;
        for (let j = 0; j < n; j++) {
            if (j == t) {
                continue;
            }
            let ne = dist[t] + g[t][j];
            if (dist[j] > ne) {
                dist[j] = ne;
                w[j] = w[t];
            } else if (dist[j] == ne) {
                w[j] += w[t];
            }
        }
    }
    return w[n - 1] % MOD;
};

//TOFILL

export { f_