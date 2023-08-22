function f_gold(grid) {
    function dfs(i, j) {
        grid[i][j] = 0;
        for (let [a, b] of [[0, -1], [0, 1], [-1, 0], [1, 0]]) {
            let [x, y] = [i + a, j + b];
            if (0 <= x && x < m && 0 <= y && y < n && grid[x][y] == 1) {
                dfs(x, y);
            }
        }
    }
    let [m, n] = [grid.length, grid[0].length];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1 && (i == 0 || i == m - 1 || j == 0 || j == n - 1)) {
                dfs(i, j);
            }
        }
    }
    return grid.reduce((a, b) => b.reduce((x, y) => x + y) + a, 0);
}

