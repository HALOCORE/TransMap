
function f_gold(grid) {
    var m = grid.length;
    var n = grid[0].length;
    function dfs(i, j) {
        if (i == m) return j;
        if (j == 0 && grid[i][j] == -1) return -1;
        if (j == n - 1 && grid[i][j] == 1) return -1;
        if (grid[i][j] == 1 && grid[i][j + 1] == -1) return -1;
        if (grid[i][j] == -1 && grid[i][j - 1] == 1) return -1;
        return (grid[i][j] == 1) ? dfs(i + 1, j + 1) : dfs(i + 1, j - 1);
    }
    var res = [];
    for (let j = 0; j < n; j++) {
        res.push(dfs(0, j));
    }
    return res;
}

