
function f_gold(grid) {
    var m = grid.length;
    var n = grid[0].length;
    function dfs(i, j) {
        if (i == m) return j;
        if (j == 0 && grid[i][j] == -1) return -1;
        if (j == n - 1 && grid[i][j] == 1) return -1;
        if (grid[i][j] == 1 && grid[i][j + 1] == -1) return -1;
        if (grid[i][j] == -1 && grid[i][j - 1] == 1) return -1;
        return dfs(i + 1, j + 1) if grid[i][j] == 1 else dfs(i + 1, j - 1);
    }
    return [dfs(0, j) for (j = 0; j < n; j++)];
}

