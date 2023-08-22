function f_gold(graph) {
    function dfs(u, c) {
        color[u] = c;
        for (let v of graph[u]) {
            if (!color[v]) {
                if (!dfs(v, 3 - c)) {
                    return false;
                }
            }
            else if (color[v] == c) {
                return false;
            }
        }
        return true;
    }
    let n = graph.length;
    let color = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (!color[i] && !dfs(i, 1)) {
            return false;
        }
    }
    return true;
}

