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
    let x = sum(matchsticks) / 4;
    let mod = sum(matchsticks) % 4;
    if (mod || x < max(matchsticks)) {
        return false;
    }
    let edges = [0, 0, 0, 0];
    matchsticks.sort(reverse = true);
    return dfs(0);
}

