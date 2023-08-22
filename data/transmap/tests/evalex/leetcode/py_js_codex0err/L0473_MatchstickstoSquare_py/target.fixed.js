function f_gold(matchsticks) {
    function dfs(u) {
        if (u == matchsticks.length) {
            return true;
        }
        for (let i = 0; i < 4; i++) {
            if (i > 0 && edges[i - 1] == edges[i]) {
                continue;
            }
            edges[i] += matchsticks[u];
            if (edges[i] <= x && dfs(u + 1)) {
                return true;
            }
            edges[i] -= matchsticks[u];
        }
        return false;
    }
    let x = matchsticks.reduce((a, b) => a + b) / 4;
    let mod = matchsticks.reduce((a, b) => a + b) % 4;
    if (mod || x < Math.max(matchsticks)) {
        return false;
    }
    let edges = [0, 0, 0, 0];
    matchsticks.sort((a, b) => b - a);
    return dfs(0);
}

