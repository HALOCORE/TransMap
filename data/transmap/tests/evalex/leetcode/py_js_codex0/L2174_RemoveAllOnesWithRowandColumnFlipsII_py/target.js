function f_gold(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let state = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) {
                state += 1 << (i * n + j);
            }
        }
    }
    let q = [state];
    let vis = {};
    vis[state] = true;
    let ans = 0;
    while (q.length > 0) {
        for (let _ = 0; _ < q.length; _++) {
            state = q.shift();
            if (state == 0) {
                return ans;
            }
            for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                    if (grid[i][j] == 0) {
                        continue;
                    }
                    let nxt = state;
                    for (let r = 0; r < m; r++) {
                        nxt &= ~(1 << (r * n + j));
                    }
                    for (let c = 0; c < n; c++) {
                        nxt &= ~(1 << (i * n + c));
                    }
                    if (!vis[nxt]) {
                        vis[nxt] = true;
                        q.push(nxt);
                    }
                }
            }
        }
        ans += 1;
    }
    return -1;
}

