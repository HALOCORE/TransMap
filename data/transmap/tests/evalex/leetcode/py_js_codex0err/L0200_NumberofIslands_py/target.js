function f_gold(grid) {
    function dfs(i, j) {
        grid[i][j] = '0';
        for (let a = 0; a < 2; a++) {
            for (let b = 0; b < 2; b++) {
                let x = i + a;
                let y = j + b;
                if (0 <= x < m && 0 <= y < n && grid[x][y] == '1') {
                    dfs(x, y);
                }
            }
        }
    }
    let ans = 0;
    let m = grid.length;
    let n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == '1') {
                dfs(i, j);
                ans += 1;
            }
        }
    }
    return ans;
}

