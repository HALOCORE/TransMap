function f_gold (n) {
    function dfs (i) {
        if (i == n + 1) {
            ans += 1;
            return;
        }
        for (let j = 0; j < match[i].length; j++) {
            if (!vis[match[i][j]]) {
                vis[match[i][j]] = true;
                dfs(i + 1);
                vis[match[i][j]] = false;
            }
        }
    }
    let ans = 0;
    let vis = new Array(n + 1).fill(false);
    let match = new Array(n + 1).fill([]);
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j % i == 0 || i % j == 0) {
                match[i].push(j);
            }
        }
    }
    dfs(1);
    return ans;
}

