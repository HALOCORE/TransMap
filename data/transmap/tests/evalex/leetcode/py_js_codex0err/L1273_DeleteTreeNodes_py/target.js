
function f_gold (nodes, parent, value) {
    function dfs (u) {
        for (let v of g[u]) {
            dfs(v);
            value[u] += value[v];
            counter[u] += counter[v];
        }
        if (value[u] == 0) {
            counter[u] = 0;
        }
    }
    let g = new Map();
    for (let i = 0; i < parent.length; i++) {
        if (parent[i] != -1) {
            if (g.has(parent[i])) {
                g.get(parent[i]).push(i);
            } else {
                g.set(parent[i], [i]);
            }
        }
    }
    let counter = new Array(nodes).fill(1);
    dfs(0);
    return counter[0];
}

